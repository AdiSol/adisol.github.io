import './Footer.css'

const Footer = () => {

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  }
   return(
      <footer className='footer' onClick={scrollToTop}>
        <a
          href='/#/#projects/'
          className='link footer__link'
        >
          all projects
        </a>

        <a
          href='/#/AnimoSched/'
          className='link footer__link'
        >
          AnimoSched
        </a>

        <a
          href='/#/CoDo/'
          className='link footer__link'
        >
          CoDO
        </a>

        <a
          href='/#/AkadsPH/'
          className='link footer__link'
        >
          AkadsPH
        </a>

        <a
          href='/#/TranspoDesire/'
          className='link footer__link'
        >
          TranspoDesire
        </a>
      </footer>
  ) 

}

export default Footer
