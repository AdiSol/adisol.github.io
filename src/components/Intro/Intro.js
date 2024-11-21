import React from 'react';
import styled from 'styled-components';

const TextIntro = styled.div`
    text-align: center;
    margin-top: 33vw;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 10vh; /* Make sure the content is centered vertically */
    margin-bottom: 20rem;
    @media (max-width: 768px) {
        min-height: 0.5vh;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 80vw; /* Set width relative to viewport */
    height: 40vw; /* Set height relative to viewport */
`;

const CircularText = styled.svg`
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 1.75vw; /* Make font-size relative to viewport width */
    text-align: center;
    fill: white; 
    font-family: 'Arial', sans-serif;
    letter-spacing: 0.4rem;

    @media (max-width: 768px) {
        font-size: 5.5vw; /* Adjust font size for smaller screens */
    }
`;

const CenteredImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 23vw; /* Make image width responsive */
    height: 23vw; /* Make image height responsive */
    border-radius: 40%;

    // @media (max-width: 768px) {
    //     width: 35vw; /* Larger width for smaller screens */
    //     height: 35vw; /* Adjust height accordingly */
    // }
`;

const Intro = () => {
    return (
        <>
            <Wrapper>
                <ImageContainer>
                    <CircularText viewBox="0 0 300 300">
                        <defs>
                            <path id="circle" d="M 150, 190 m -80, 0 a 90,100 0 1,1 160,0 a 90,90 0 1,1 -170,0" />
                        </defs>
                        <text>
                            <textPath href="#circle" startOffset="27%" textAnchor="middle">
                                Hello There!
                            </textPath>
                        </text>
                    </CircularText>     
                    <CenteredImage src="/Home/me-3d.png" alt="3D illustration of Adrienne" />
                    <TextIntro>
                        <h1 style={{fontSize: "9vw", color: "white"}}>I'm Adrienne</h1>
                        <h2 style={{color: "white", fontSize: "3vw"}}>Web Developer, UX Researcher, & Illustrator</h2>
                    </TextIntro>
                </ImageContainer> 
            </Wrapper>
        </>
    );
};

export default Intro;
