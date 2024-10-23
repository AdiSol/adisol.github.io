import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import styled from 'styled-components';

const LogoImg = styled.img`
  padding: 0 1rem;
  z-index: 2000;
`;
const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
        {/* {homepage ? (
          <a href={homepage} className='link'>
            <LogoImg src='logo.png' height={'45rem'}/>
          </a>
        ) : (
          title
        )} */}
      <Navbar />
    </header>
  )
}

export default Header
