// import { useContext } from 'react'
// import { ThemeContext } from './contexts/theme'
// import Header from './components/Header/Header'
import About from '../components/About/About'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import styled from 'styled-components';
import Intro from '../components/Intro/Intro'
import bgImage from './bg.png';
import Work from '../components/Work/Work'

const Main = styled.div`
  margin: auto 5vw;

  @media (max-width: 480px) {
    margin: auto 2vw; /* Reduce margins for very small screens */
  }

  @media (min-width: 768px) {
    margin: auto 10vw; /* Increase margins for medium screens */
  }

  @media (min-width: 1400px) {
    margin: auto 15vw; /* Further increase for wide screens */
  }
`;


const Home = () => {
//   const [{ themeName }] = useContext(ThemeContext)
  
  return (
    // <div id='top' className={`${themeName} app`}>
    // <HomeBG>
    //   <span>hello</span>
    // </HomeBG>
      <Main>
        <Intro />
        <Work />
        <About />
        <Contact />
        {/*<Projects />
        <Skills />
         */}
      </Main>

    // </div>
  )
}

export default Home