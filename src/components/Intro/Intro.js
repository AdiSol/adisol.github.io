import React from 'react';
import styled from 'styled-components';

const TextIntro = styled.div`
    text-align: center;
    margin-top: clamp(1rem, 35vw, 40rem);
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 10vh; /* Make sure the content is centered vertically */
    margin-bottom: clamp(4rem, 15vw, 17rem);
    @media (max-width: 768px) {
        min-height: 0.5vh;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    // width: clamp(300px, 80vw, 800px); 
    height: clamp(150px, 40vw, 800px); 
`;

const CircularText = styled.svg`
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: clamp(1rem, 1.75vw, 2rem);
    text-align: center;
    fill: white; 
    // font-family: 'Arial', sans-serif;
    letter-spacing: 0.3rem;

    @media (max-width: 768px) {
        font-size: clamp(3rem, 5vw, 5.5rem); 
    }
`;

const CenteredImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: clamp(100px, 23vw, 550px); /* Min: 100px, Responsive, Max: 250px */
    height: clamp(100px, 23vw, 550px); /* Min: 100px, Responsive, Max: 250px */
    border-radius: 40%;
`;

const NameText = styled.h1`
    font-size: clamp(2.5rem, 9vw, 7rem);
    color: white;
`;

const SubText = styled.h2`
    font-size: clamp(1rem, 3vw, 3rem);
    color: white;
`
const Intro = () => {
    return (
        <div id="home">
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
                        <NameText>I'm Adrienne</NameText>
                        <SubText>Web Developer, UX Researcher, & Illustrator</SubText>
                    </TextIntro>
                </ImageContainer> 
            </Wrapper>
        </div>
    );
};

export default Intro;
