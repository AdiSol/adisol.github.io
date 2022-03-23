import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import './ScrollToTop.css'

const ScrollToTop = () => {
  // const [isVisible, setIsVisible] = useState(false)
  const [visible, setVisible] = useState(false)

  // useEffect(() => {
  //   const toggleVisibility = () =>
  //     window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

  //   window.addEventListener('scroll', toggleVisibility)
  //   return () => window.removeEventListener('scroll', toggleVisibility)

  //   window.scrollTo(0, 0)
  // }, [])

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return visible ? (
    <div className='scroll-top'>
      <a onClick={scrollToTop}>
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </div>
  ) : null
}

export default ScrollToTop
