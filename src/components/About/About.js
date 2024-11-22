import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import Text from '../../Text'
import ReactRotatingText from 'react-rotating-text'
import './About.css'
import { TitleStyle, Section } from '../../contexts/theme'
import styled from 'styled-components'

const AboutSection = styled.section`
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
  font-size: 1.2rem;
  text-decoration: none;
  color: #3c4858;

  &:hover {
    text-decoration: underline;
    color: #2b7ac1;
  }
`;

const ImageContainer = styled.div`
  flex: 1; /* Take up equal space */
  // background-color: #aec6ff;
  // border-radius: 50%; /* Arch effect */
  // padding: 2rem;
  width: 100%;
  max-width: 300px; /* Restrict the max width of the image */
  // aspect-ratio: 1; /* Ensure it's a square */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

const About = () => {

  return (
    <div className='about'>
      <Section>
        <TextContent>
          <Heading>About</Heading>
          <AboutText>
            <p>
              Hi! I’m Adrienne. I am a
              web developer that’s very interested in UI/UX, especially with UX
              research! I like to play around designs and ideas. And finding ways
              to solve problems through design and technology!
            </p>
            <p>
              During my past times, I like to draw, specifically of my friends.
              Sometimes I try new mediums to make art. I am a foodie at heart. I
              also like to hike and work out. Anything to make me feel good and
              strong honestly. Occasionally, I go scuba diving and bouldering.
            </p>
          </AboutText>
          <ResumeLink href="./Resume.pdf">
            Resume &#8594; {/* Arrow symbol */}
          </ResumeLink>
        </TextContent>
        
        <ImageContainer>
          <svg width="316" height="290" viewBox="0 0 316 290" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="cuteMe" clip-path="url(#clip0_104_2)">
            <path id="leftHair" d="M187.039 214.616C167.488 225.512 106.502 242.105 56.4789 221.546C6.45553 200.987 8.02173 164.4 30.0283 99.1057C52.035 33.8118 86.5594 5.31779 136.378 19.7333C186.401 40.2921 234.557 184.587 187.039 214.616Z" fill="#454343"/>
            <path id="torso" d="M183 242.353C183 268.293 151.884 276 113.5 276C75.1162 276 44 265.234 44 239.294C46.4821 222.52 75.1162 172 113.5 172C151.884 172 178.036 215.514 183 242.353Z" fill="#FBD039"/>
            <g id="neck" filter="url(#filter0_i_104_2)">
            <path d="M103 163H124V185.222L113.5 188L103 185.222V163Z" fill="#F5D5AF"/>
            </g>
            <g id="face" filter="url(#filter1_i_104_2)">
            <path d="M166.657 104.76C180.665 132.174 160.957 171.032 105.022 167.812C57.3944 165.071 51.7911 123.949 54.5927 102.018C54.5927 59.625 62.9521 28 107.823 28C152.695 28 166.657 62.3664 166.657 104.76Z" fill="#F5D5AF"/>
            </g>
            <path id="leftBangs" d="M130.37 52.2764C89.4622 51.606 83.395 123.139 33.0798 116.467C26.3967 94.7643 52.8407 29.8512 96.45 23.7673C136.76 18.1437 171.493 48.5625 160.561 63.0028C146.45 52.5399 135.289 52.357 130.37 52.2764Z" fill="#454343"/>
            <path id="rightBangs" d="M167.06 97.0903C147.627 80.4335 143.426 51.9317 147.627 49.8961C152.436 45.7447 159.7 44.7519 174.29 61.6517C188.879 78.5516 186.583 125.533 181.775 129.684C176.966 133.836 173.129 108.833 167.06 97.0903Z" fill="#454343"/>
            <g id="eyes" className='facial-move'>
            <g id="leftEye">
            <path d="M92.1855 104.243C92.1856 107.505 91.2643 109.974 90.1278 109.974C88.9914 109.974 88.0701 106.661 88.0701 104.243C88.0701 100.097 88.9914 97.6278 90.1278 97.6278C91.2643 97.6278 92.1855 100.706 92.1855 104.243Z" fill="#5E5B5B"/>
            <path d="M92.1855 104.243C92.1856 107.505 91.2643 109.974 90.1278 109.974C88.9914 109.974 88.0701 106.661 88.0701 104.243C88.0701 100.097 88.9914 97.6278 90.1278 97.6278C91.2643 97.6278 92.1855 100.706 92.1855 104.243Z" fill="#5E5B5B"/>
            <path d="M92.1855 104.243C92.1856 107.505 91.2643 109.974 90.1278 109.974C88.9914 109.974 88.0701 106.661 88.0701 104.243C88.0701 100.097 88.9914 97.6278 90.1278 97.6278C91.2643 97.6278 92.1855 100.706 92.1855 104.243Z" fill="#5E5B5B"/>
            </g>
            <g id="rightEye">
            <path d="M145.686 104.243C145.686 107.505 144.765 109.974 143.628 109.974C142.492 109.974 141.57 106.661 141.57 104.243C141.57 100.097 142.492 97.6278 143.628 97.6278C144.765 97.6278 145.686 100.706 145.686 104.243Z" fill="#5E5B5B"/>
            <path d="M145.686 104.243C145.686 107.505 144.765 109.974 143.628 109.974C142.492 109.974 141.57 106.661 141.57 104.243C141.57 100.097 142.492 97.6278 143.628 97.6278C144.765 97.6278 145.686 100.706 145.686 104.243Z" fill="#5E5B5B"/>
            <path d="M145.686 104.243C145.686 107.505 144.765 109.974 143.628 109.974C142.492 109.974 141.57 106.661 141.57 104.243C141.57 100.097 142.492 97.6278 143.628 97.6278C144.765 97.6278 145.686 100.706 145.686 104.243Z" fill="#5E5B5B"/>
            </g>
            </g>
            <path id="nose" d="M124 115.5C124 116.881 123.281 118 122.394 118C121.507 118 122.394 116.881 122.394 115.5C122.394 114.119 121.507 113 122.394 113C123.281 113 124 114.119 124 115.5Z" fill="#FFB88F"/>
            <path id="mouth" className='facial-move' d="M118.381 143.195C113.077 143.207 108.772 140.622 108.765 137.421C108.758 134.221 113.064 137.412 118.368 137.4C123.672 137.388 127.965 134.178 127.972 137.379C127.979 140.579 123.685 143.183 118.381 143.195Z" fill="#FFAA8F"/>
            <g id="leftBrow" className='facial-move'>
            <path d="M86.5494 85.9942C89.6124 85.9988 92.0944 86.7037 92.0931 87.5685C92.0918 88.4334 89.61 87.5648 86.547 87.5601C83.484 87.5555 80.9997 88.4167 81.001 87.5518C81.0023 86.687 83.4864 85.9896 86.5494 85.9942Z" fill="#5E5B5B"/>
            <path d="M86.5494 85.9942C89.6124 85.9988 92.0944 86.7037 92.0931 87.5685C92.0918 88.4334 89.61 87.5648 86.547 87.5601C83.484 87.5555 80.9997 88.4167 81.001 87.5518C81.0023 86.687 83.4864 85.9896 86.5494 85.9942Z" fill="#5E5B5B"/>
            <path d="M86.5494 85.9942C89.6124 85.9988 92.0944 86.7037 92.0931 87.5685C92.0918 88.4334 89.61 87.5648 86.547 87.5601C83.484 87.5555 80.9997 88.4167 81.001 87.5518C81.0023 86.687 83.4864 85.9896 86.5494 85.9942Z" fill="#5E5B5B"/>
            <path d="M86.5494 85.9942C89.6124 85.9988 92.0944 86.7037 92.0931 87.5685C92.0918 88.4334 89.61 87.5648 86.547 87.5601C83.484 87.5555 80.9997 88.4167 81.001 87.5518C81.0023 86.687 83.4864 85.9896 86.5494 85.9942Z" fill="#5E5B5B"/>
            <path d="M86.5494 85.9942C89.6124 85.9988 92.0944 86.7037 92.0931 87.5685C92.0918 88.4334 89.61 87.5648 86.547 87.5601C83.484 87.5555 80.9997 88.4167 81.001 87.5518C81.0023 86.687 83.4864 85.9896 86.5494 85.9942Z" fill="#5E5B5B"/>
            </g>
            <g id="rightBrow" className='facial-move'>
            <path d="M147.624 85.9942C150.687 85.9988 153.169 86.7037 153.168 87.5685C153.167 88.4334 150.685 87.5648 147.622 87.5601C144.559 87.5555 142.075 88.4167 142.076 87.5518C142.077 86.687 144.561 85.9896 147.624 85.9942Z" fill="#5E5B5B"/>
            <path d="M147.624 85.9942C150.687 85.9988 153.169 86.7037 153.168 87.5685C153.167 88.4334 150.685 87.5648 147.622 87.5601C144.559 87.5555 142.075 88.4167 142.076 87.5518C142.077 86.687 144.561 85.9896 147.624 85.9942Z" fill="#5E5B5B"/>
            <path d="M147.624 85.9942C150.687 85.9988 153.169 86.7037 153.168 87.5685C153.167 88.4334 150.685 87.5648 147.622 87.5601C144.559 87.5555 142.075 88.4167 142.076 87.5518C142.077 86.687 144.561 85.9896 147.624 85.9942Z" fill="#5E5B5B"/>
            <path d="M147.624 85.9942C150.687 85.9988 153.169 86.7037 153.168 87.5685C153.167 88.4334 150.685 87.5648 147.622 87.5601C144.559 87.5555 142.075 88.4167 142.076 87.5518C142.077 86.687 144.561 85.9896 147.624 85.9942Z" fill="#5E5B5B"/>
            <path d="M147.624 85.9942C150.687 85.9988 153.169 86.7037 153.168 87.5685C153.167 88.4334 150.685 87.5648 147.622 87.5601C144.559 87.5555 142.075 88.4167 142.076 87.5518C142.077 86.687 144.561 85.9896 147.624 85.9942Z" fill="#5E5B5B"/>
            </g>
            <path id="Rectangle 5" d="M170.369 204.953L219.121 243.866L201 267.5L203.5 271.5L201.5 271L196 266L193.5 263.5L152.062 227.888L170.369 204.953Z" fill="#F5D5AF"/>
            <path id="leftElbow" d="M71.2277 252.601C69.453 261.385 61.7961 267.25 54.1257 265.7C46.4553 264.151 37.9256 255.507 39.7003 246.723C41.475 237.939 52.8821 232.339 60.5526 233.889C68.223 235.439 73.0024 243.816 71.2277 252.601Z" fill="#F5D5AF"/>
            <g id="rightArm" className='waving-my-arm'>
            <path id="rightForearm" d="M199.5 264.497C199.5 264.171 199.58 263.849 199.732 263.561L204 255.5L213.419 238.149C213.473 238.05 213.535 237.956 213.604 237.867L219 231L226 222L255.027 188.968L265.047 179.619C265.855 178.866 267.12 178.91 267.874 179.717L270.883 182.942C271.47 183.571 271.588 184.506 271.177 185.262L265.933 194.902L247.88 226.559L239.5 241.5L232.5 252L217.099 273.859C217.033 273.953 216.959 274.041 216.878 274.122L215.5 275.5L214.73 276.271C214.578 276.423 214.402 276.549 214.21 276.645L213.696 276.902C213.566 276.967 213.429 277.018 213.287 277.053L211.985 277.379C211.667 277.458 211.333 277.458 211.015 277.379L209.713 277.053C209.571 277.018 209.434 276.967 209.304 276.902L207.627 276.064C207.543 276.021 207.461 275.973 207.383 275.919L205.334 274.5L203.128 272.609C203.043 272.537 202.964 272.457 202.892 272.371L200.771 269.825C200.592 269.611 200.46 269.362 200.384 269.094L199.577 266.269C199.526 266.091 199.5 265.906 199.5 265.72L199.5 264.497Z" fill="#F5D5AF"/>
            <g id="rightElbowBlush" filter="url(#filter2_f_104_2)">
            <path d="M217.816 265.567C216.363 269.925 216.819 275.736 212.005 275.736C207.191 275.736 207.646 270.381 207.646 265.567C207.646 260.753 207.191 261.209 212.005 261.209C216.819 261.209 216.363 259.756 217.816 265.567Z" fill="#FFB88F"/>
            </g>
            <g id="shadowUnderHand" filter="url(#filter3_f_104_2)">
            <path d="M262.85 200.194C259.063 205.12 262.834 200.65 260.5 203C257.023 199.198 255.787 196.961 252 193.5C253.481 193.5 252 193 254.134 190.025C252.5 200.194 261 199 262.85 200.194Z" fill="#FFB88F"/>
            </g>
            <g id="rightHand">
            <path id="rightHand_2" d="M258.516 197.812C253.196 191.959 258.322 177.803 266.295 170.556C274.268 163.309 288.558 158.411 293.878 164.264C299.198 170.117 290.659 183.651 282.686 190.898C274.713 198.145 263.836 203.666 258.516 197.812Z" fill="#F5D5AF"/>
            <path id="rightThumb" d="M257.822 196.398C254.479 195.977 252.594 189.085 253.613 181.005C254.632 172.925 258.473 162.844 261.816 163.266C265.159 163.687 266.738 174.452 265.719 182.531C264.701 190.611 261.165 196.82 257.822 196.398Z" fill="#F5D5AF"/>
            </g>
            </g>
            <path id="rightSleeve" d="M208.501 218.319C219.699 227.124 211.164 242.328 205.208 249.903C199.252 257.479 193.456 270.357 182.258 261.552C171.06 252.747 131.129 192.417 144.033 187.252C149.989 179.676 197.303 209.515 208.501 218.319Z" fill="#FBD039"/>
            <g id="cup" filter="url(#filter4_i_104_2)">
            <path d="M174.577 227.567C175.175 227.552 175.653 228.062 175.598 228.659L170.129 287.85C170.081 288.364 169.65 288.758 169.133 288.758L142.011 288.758C141.504 288.758 141.078 288.379 141.018 287.877L134.054 229.707C133.984 229.122 134.432 228.604 135.021 228.589L174.577 227.567Z" fill="#E2F8FF"/>
            </g>
            <path id="leftArm" d="M53.6015 238.258C53.7472 237.025 54.9694 236.221 56.1592 236.576L100.433 249.777L128.06 256.333C128.216 256.37 128.375 256.388 128.534 256.387L145.734 256.283C147.014 256.276 147.971 257.455 147.701 258.706L142.462 282.969C142.227 284.06 141.143 284.747 140.055 284.495L97.2117 274.558L77 270.5L55 266L52.0449 265.015C51.1452 264.715 50.5798 263.825 50.6911 262.883L53.6015 238.258Z" fill="#F5D5AF"/>
            <path id="leftHand" d="M125.419 274.763C124.9 266.87 137.699 260.553 148.451 259.847C159.202 259.141 173.433 264.205 173.952 272.098C174.471 279.99 161.08 287.723 150.329 288.429C139.577 289.135 125.937 282.655 125.419 274.763Z" fill="#F5D5AF"/>
            <path id="leftThumb" d="M126 258.345C126.321 253.893 133.166 250.759 141.289 251.345C149.412 251.931 159.624 256.055 159.303 260.507C158.981 264.959 148.249 268.053 140.126 267.467C132.003 266.881 125.679 262.797 126 258.345Z" fill="#F5D5AF"/>
            <path id="leftSleeve" d="M79.4485 228.982C79.3088 246.135 73.0104 243.444 65.7547 243.444C58.0148 243.444 33.7238 241.627 37.083 231.626C40.4422 221.626 76.8163 178.185 83.7685 185.95C90.6465 188.261 82.8077 218.981 79.4485 228.982Z" fill="#FBD039"/>
            <ellipse id="lid" cx="155" cy="229" rx="25" ry="9" fill="#FFAA8F"/>
            <rect id="straw" x="155" y="209" width="3" height="20" fill="white"/>
            <g id="Ellipse 1">
            <path d="M98.9616 209.124C98.9616 211.828 99.3315 215 97.7762 215C94.6657 215 90 210.849 90 208.144C90 205.44 91.561 204 94.0357 204C96.5104 204 98.9616 206.186 98.9616 209.124Z" fill="#FA6770"/>
            <path d="M98.9616 209.124C98.9616 211.828 99.3315 215 97.7762 215C94.6657 215 90 210.849 90 208.144C90 205.44 91.561 204 94.0357 204C96.5104 204 98.9616 206.186 98.9616 209.124Z" fill="#FA6770"/>
            </g>
            <g id="Ellipse 2">
            <path d="M97.2865 209C97.2865 211.761 96.2534 215 98.1108 215C100.5 215 104.012 210.203 104 208C103.987 205.797 103.336 204 101.478 204C99.6209 204 97.2865 206 97.2865 209Z" fill="#FA6770"/>
            <path d="M97.2865 209C97.2865 211.761 96.2534 215 98.1108 215C100.5 215 104.012 210.203 104 208C103.987 205.797 103.336 204 101.478 204C99.6209 204 97.2865 206 97.2865 209Z" fill="#FA6770"/>
            </g>
            <g id="left blush" className='facial-move' filter="url(#filter5_f_104_2)">
            <ellipse cx="80" cy="129" rx="17" ry="16" fill="#FFB88F"/>
            </g>
            <g id="right blush" className='facial-move' filter="url(#filter6_f_104_2)">
            <circle cx="149" cy="129" r="16" fill="#FFB88F"/>
            </g>
            <g id="leftElbowBlush" filter="url(#filter7_f_104_2)">
            <path d="M58 250.5C58 254.642 54.0927 258 49.2727 258C44.4528 258 42 254.642 42 250.5C42 246.358 44.4528 243 49.2727 243C54.0927 243 58 246.358 58 250.5Z" fill="#FFB88F"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_i_104_2" x="103" y="163" width="21" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.72 0 0 0 0 0.5625 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_104_2"/>
            </filter>
            <filter id="filter1_i_104_2" x="53.9999" y="28" width="117" height="144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.6675 0 0 0 0 0.5625 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_104_2"/>
            </filter>
            <filter id="filter2_f_104_2" x="202.635" y="256.047" width="20.1807" height="24.6888" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_104_2"/>
            </filter>
            <filter id="filter3_f_104_2" x="248" y="186.025" width="18.8503" height="20.9755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_104_2"/>
            </filter>
            <filter id="filter4_i_104_2" x="134.046" y="227.567" width="45.5563" height="61.1908" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.493889 0 0 0 0 0.933333 0 0 0 0 0.933333 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_104_2"/>
            </filter>
            <filter id="filter5_f_104_2" x="60" y="110" width="40" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_104_2"/>
            </filter>
            <filter id="filter6_f_104_2" x="130" y="110" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_104_2"/>
            </filter>
            <filter id="filter7_f_104_2" x="37" y="238" width="26" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_104_2"/>
            </filter>
            <clipPath id="clip0_104_2">
            <rect width="316" height="290" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          </ImageContainer>
        </Section>
    </div>
  )
}

export default About
