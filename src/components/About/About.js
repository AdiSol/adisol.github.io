import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import Text from '../../Text'
import ReactRotatingText from 'react-rotating-text'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  const items = ['Hello! My name is Josh.', 'Hola, me llamo Josh.', 'こんにちは！マンザノです。']
  const greeting_duration = 7000
  const desc_duration = 4000

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi there, I'm Adrienne!👋
          {/* <ReactRotatingText items={items} eraseMode={'overwrite'} emptyPause={0} pause={greeting_duration} cursor={false}/> */}
        </h1>
      )}
      <h2 className='about__role'>UX Researcher | Frontend Developer | Aspiring UX Designer</h2>
      {/* {role && <h2 className='about__role'>I am a <ReactRotatingText emptyPause={0} cursor={false} pause={desc_duration} items={role}/> currently based in Taipei, Taiwan.</h2>} */}
      {/* <p className='about__desc'>{description && description}</p> */}

      {/* <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div> */}
    </div>
  )
}

export default About
