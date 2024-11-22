import { contact } from '../../portfolio'
import './Contact.css'
import { TitleStyle, Section } from '../../contexts/theme'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items on small screens */
    text-align: center; /* Center align text for smaller screens */
  }
`;

const TextContent = styled.div`
  flex: 1; /* Take up equal space */
  color: #6a6a86;
  font-size: 1.2rem;
  line-height: 1.8;
  
`;

const LinkContent = styled.div`
  text-align: left;
`;
const Heading = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem); /* Responsive title size */
  color: #3c4858;
  margin-bottom: 1rem;
`;
const Contact = () => {
  if (!contact.email) return null

  return (
    <Section>
      {/* <TitleStyle>Contact</TitleStyle> */}
      
      <TextContent>
        <Heading>Contact</Heading>
        <LinkContent>
          <p><AlternateEmailIcon/> adriennesoliven@gmail.com <ContentCopyIcon/></p>
          <p><GitHubIcon/> GitHub</p>
          <p><LinkedInIcon/> LinkedIn</p>
        </LinkContent>
      </TextContent>
      {/* <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a> */}
    </Section>
  )
}

export default Contact
