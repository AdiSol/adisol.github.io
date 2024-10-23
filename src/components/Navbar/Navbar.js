import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'
import Container from '@mui/material/Container';
import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

import styled from 'styled-components';
import { header } from '../../portfolio'
const NavBar = styled.nav`
  display: flex;
  justify-content: center; /* Center the navbar content */
  align-items: center;
  position: fixed;
  top: 0;
  padding: 1rem 0;
  z-index: 900;
  width: 90%;
  right: 0;
  margin-right: 6vw;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.7rem 1.5rem;
  backdrop-filter: blur(15px);
  border-radius: 50px; /* Rounded edges */
  
  &.scrolled {
    backdrop-filter: blur(15px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional: a soft shadow */
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const NavItems = styled.ul`
  display: flex;
  gap: 2.5vw;
  list-style: none;
  background-color: transparent;

  li {
    font-size: 1.3vw;
    font-weight: 600;
    color: #333366;
    padding: 0.5rem 0.75rem;
    background: none; 

    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
  }

  li: hover {
    color: #6A5ACD;
  }

  li.active {
    background-color: rgba(147, 112, 219, 0.2);
    // color: white;
    padding: 0.5rem 0.8rem;
    border-radius: 40px;
  }

  
`;

const Spacer = styled.div`
  height: 80px;
`;

const LogoImg = styled.img`
  padding: 1rem 1rem;
  z-index: 2000;
  width: 6.5rem;

  @media (max-width: 768px) {
    display: none; 
  }
`;


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { homepage, title } = header

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      <Spacer />
      {homepage ? (
          <a href={homepage} className='link'>
            <LogoImg src='logo.png'/>
          </a>
        ) : (
          title
        )}
      <NavBar>
        
        <NavItemsContainer className={scrolled ? 'scrolled' : ''}>
          <NavItems>
            <li className='active'>Home</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </NavItems>
        </NavItemsContainer>
      </NavBar>
    </>
  )
  // const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  // const [showNavList, setShowNavList] = useState(false)

  // const toggleNavList = () => setShowNavList(!showNavList)

  // return (
  //   <React.Fragment>
  //   <Container>
  //   {/* <a
  //     href='/#/'
  //     onClick={toggleNavList}
  //     // className='link link--nav'
  //   >
  //     <div className='nav__list-item brand-logo'>
  //       Adrienne Soliven
  //     </div>
      
  //   </a> */}
  //   </Container>
  //   <nav className='center nav'>
     
  //     <ul
  //       style={{ display: showNavList ? 'flex' : null }}
  //       className='nav__list'
  //     >
  //       <li className='nav__list-item'>
          
  //       </li>

  //       {projects.length ? (

  //           <li className='nav__list-item'>
  //             <HashLink to={'/#projects'}
  //             onClick={toggleNavList}
  //             className='link link--nav'
  //             >
  //               Projects
  //             </HashLink>
  //           </li>
  //       ) : null}

  //       {/* <li className='nav__list-item'>
  //         <a
  //           href='#skills'
  //           onClick={toggleNavList}
  //           className='link link--nav'
  //         >
  //           Skills
  //         </a>
  //       </li> */}

  //       {contact.email ? (
  //         <li className='nav__list-item'>
  //           <HashLink
  //             to='/#contact'
  //             onClick={toggleNavList}
  //             className='link link--nav'
  //           >
  //             Contact
  //           </HashLink>
  //         </li>
  //       ) : null}
  //     </ul>

  //     <button
  //       type='button'
  //       onClick={toggleTheme}
  //       className='btn btn--icon nav__theme'
  //       aria-label='toggle theme'
  //     >
  //       {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
  //     </button>

  //     <button
  //       type='button'
  //       onClick={toggleNavList}
  //       className='btn btn--icon nav__hamburger'
  //       aria-label='toggle navigation'
  //     >
  //       {showNavList ? <CloseIcon /> : <MenuIcon />}
  //     </button>
  //   </nav>
  //   </React.Fragment>
  // )
}

export default Navbar
