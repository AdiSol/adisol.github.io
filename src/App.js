import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import Home from './pages/Home';
import AnimoSched from './pages/AnimoSched';
import Akads from './pages/Akads';
import TranspoDesire from './pages/TranspoDesire';
import CoDo from './pages/CoDo';
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      {/* <Home/> */}
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/AnimoSched" element={<AnimoSched />}/>
          <Route path="/AkadsPH" element={<Akads />}/>
          <Route path="/TranspoDesire" element={<TranspoDesire />}/>
          <Route path="/CoDo" element={<CoDo />}/>
        </Routes>
      </HashRouter>
     
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
