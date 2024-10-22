// import { useContext } from 'react'
// import { ThemeContext } from './contexts/theme'
// import Header from './components/Header/Header'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import styled from 'styled-components';
import Intro from '../components/Intro/Intro'
import bgImage from './bg.jpg';
const Home = () => {
//   const [{ themeName }] = useContext(ThemeContext)
  const HomeBG = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: 100%;
`;
  return (
    // <div id='top' className={`${themeName} app`}>
    // <HomeBG>
    //   <span>hello</span>
    // </HomeBG>
      <main style={{height: "300vh"}}>
        <Intro />
        {/* <About />
        <Projects />
        <Skills />
        <Contact /> */}
      </main>

    // </div>
  )
}

export default Home