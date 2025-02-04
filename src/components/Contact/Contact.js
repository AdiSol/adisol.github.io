import { contact } from '../../portfolio'
import './Contact.css'
import { Section } from '../../contexts/theme'
import styled, { keyframes } from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';

const TextContent = styled.div`
  flex: 1; /* Take up equal space */
  color: #6a6a86;
  font-size: 1.2rem;
  line-height: 1.8;
  
`;

const LinkContent = styled.div`
  text-align: left;
`;

const Heading = styled.h3`
  font-size: clamp(1.2rem, 3.2vw, 2.2rem); /* Responsive title size */
  color: #3c4858;
  margin-bottom: 1rem;
`;

const IconTextWrapper = styled.a`
  display: flex;
  align-items: center; /* Align items vertically centered */
  gap: 0.5rem; /* Add spacing between the icon and text */
  margin-bottom: 0.2rem;
  &:hover {
    color: #2b7ac1;
    font-weight: bold;
    cursor: pointer;
  }
  
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }  
  100% {
    opacity: 0;
    transform: scale(0.9)
  }
  `;

  const EmailContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block; /* Ensures the container wraps its content */
  width: max-content; /* Ensures it adjusts to the content width */
`;

const EmailText = styled.span`
  display: flex;
  align-items: center; /* Align items vertically centered */
  gap: 0.5rem; /* Add spacing between the icon and text */
  filter: ${(props) => (props.isCopied ? "blur(2px)" : "none")};
  transition: filter 0.3s ease;

  &:hover {
    color: #2b7ac1;
    font-weight: bold;
    cursor: pointer;
  }
`;

const CopiedTag = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4CAF50;
  color: white;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  pointer-events: none; /* Prevent interaction with the tag */
  white-space: nowrap; /* Prevent the tag text from wrapping */
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease; /* Smooth fade-in/out */
`;
const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(()=> {
        setIsCopied(false)
      }, 1500);
    });
  }

  return (
    <Section id='contact'>
      {/* <TitleStyle>Contact</TitleStyle> */}
      
      <TextContent>
        <Heading>Contact</Heading>
        <LinkContent>
          <EmailContainer onClick={()=>handleCopy("adriennesoliven@gmail.com")}>
            <EmailText  isCopied={isCopied}>
              <AlternateEmailIcon/> adriennesoliven@gmail.com <ContentCopyIcon/>
            </EmailText>
            {isCopied && <CopiedTag isVisible={isCopied}>Copied!</CopiedTag>}
          </EmailContainer>
          <a href="https://github.com/AdiSol" target="_blank" rel="noopener noreferrer">
            <IconTextWrapper><GitHubIcon/> GitHub</IconTextWrapper>
          </a>
          <a href="https://www.linkedin.com/in/adrienne-soliven-7725831aa/" target="_blank" rel="noopener noreferrer">
            <IconTextWrapper><LinkedInIcon/> LinkedIn</IconTextWrapper>
          </a>
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
