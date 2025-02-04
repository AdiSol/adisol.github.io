import './About.css'
import { Section } from '../../contexts/theme'
import styled from 'styled-components'
import { MeSVG } from './Assets';
const TextContent = styled.div`
  flex: 1; /* Take up equal space */
  color: #6a6a86;
  font-size: 1.2rem;
  line-height: 1.8;
`;

const AboutText = styled.div`
  max-width: 900px;
  min-width: 400px;
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem); /* Responsive title size */
  color: #3c4858;
  margin-bottom: 1rem;
`;

const ResumeLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  font-weight: bold;
  font-size: 1.7rem;
  text-decoration: none;
  color: #3c4858;

  &:hover {
    // text-decoration: underline;
    color: #2b7ac1;
  }
`;

const ImageContainer = styled.div`
  max-width: 500px; /* Restrict the max width of the image */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

const Paragraph = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem); 
`;


const About = () => {

  return (
    <div className='about' id="about">
      <Section>
        <TextContent>
            <Heading>About</Heading>
            <AboutText>
              <Paragraph>
                Hi! I’m Adrienne. I am a
                web developer that’s very interested in UI/UX, especially with UX
                research! I like to play around designs and ideas. And finding ways
                to solve problems through design and technology!
              </Paragraph>
              <Paragraph>
                During my past times, I like to draw, specifically of my friends.
                Sometimes I try new mediums to make art. I am a foodie at heart. I
                also like to hike and work out. Anything to make me feel good and
                strong honestly. Occasionally, I go scuba diving and bouldering.
              </Paragraph>
            </AboutText>
            <ResumeLink href="./Resume.pdf">
              Resume &#8594; {/* Arrow symbol */}
            </ResumeLink>
          </TextContent>
        
          <ImageContainer>
                {MeSVG}
          </ImageContainer>
        </Section>
    </div>
  )
}

export default About
