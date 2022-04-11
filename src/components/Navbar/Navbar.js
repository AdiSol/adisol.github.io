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


const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <React.Fragment>
    <Container>
    {/* <a
      href='/#/'
      onClick={toggleNavList}
      // className='link link--nav'
    >
      <div className='nav__list-item brand-logo'>
        Adrienne Soliven
      </div>
      
    </a> */}
    </Container>
    <nav className='center nav'>
     
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          
        </li>

        {projects.length ? (

            <li className='nav__list-item'>
              <HashLink to={'/#projects'}
              onClick={toggleNavList}
              className='link link--nav'
              >
                Projects
              </HashLink>
            </li>
        ) : null}

        {/* <li className='nav__list-item'>
          <a
            href='#skills'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Skills
          </a>
        </li> */}

        {contact.email ? (
          <li className='nav__list-item'>
            <HashLink
              to='/#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </HashLink>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
    </React.Fragment>
  )
}

export default Navbar
