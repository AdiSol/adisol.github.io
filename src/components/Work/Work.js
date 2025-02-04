import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';


const WorkSection = styled.section`
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1400px;
  margin: 4rem auto;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items on small screens */
    text-align: center; /* Center align text for smaller screens */
  }
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem); /* Responsive title size */
  color: #3c4858;
  margin-bottom: 1rem;
  
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); /* Two columns unless on smaller screens */
  gap: 3rem; /* Space between cards */
  width: 100%;
  max-width: 1400px; /* Restrict overall width */
  margin: auto; /* Center the grid container */
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Single column on small screens */
  }
`;

const Work = () => {
    

    const projects = [
        {
            title: "SafeHands", 
            desc: "An AI hand detection tool that uses a web app to specify hazardous areas for extra protection to manufacturing workers. Won 1st in AI+ Day 2022.", 
            tags: ['ReactJS', 'Flask Python', 'RESTfulAPI', 'NGINX', 'SemanticUI', 'Redis Server', 'Ubuntu Environment', 'Figma'], 
            img: "/SafeHands/punch_example1.png", 
            route: '/work/SafeHands'
        },
        {
            title: "NU LPR 101", 
            desc: "A license plate recognition tool that utilizes the web for setup configuration and connecting to other 3rd party application for parking lot use cases.", 
            tags: ['ReactJS', 'Flask Python', 'RESTfulAPI', 'NGINX', 'SemanticUI', 'Redis Server', 'Ubuntu Environment','Figma'], 
            img: "/NULPR101/cars.png", 
            route: '/work/NULPR101'
        },
        {
            title: "AkadsPH", 
            desc: "An all-in-one tutoring platform, that helps parents find tutors for their kids through a matching system. Clients can book and pay on a single platform.", 
            tags: ['ReactJS', 'MaterialUI', 'RESTfulAPI', 'Figma', 'Usability Testing'], 
            img: "/Akads/landing1.png", 
            route: '/work/AkadsPH'
        },
        {
            title: "AnimoSched", 
            desc: "A web application aimed to help students by generating class schedules for students based on class priority, preference,  and availability.", 
            tags: ['ReactJS', 'MaterialUI', 'RESTfulAPI', 'Figma', 'Usability Testing'], 
            img: "/AnimoSched/v2/v2_landing.png", 
            route: '/work/AnimoSched'
        },
        {
            title: "CoDo", 
            desc: "A condominium/dormitory companion mockup project that was done through InVision. Incapsulates all the needs a dormitory student would need in a single mobile app.", 
            tags: ['InVision', 'Gravit Designer'], 
            img: "/CoDo/codo_preview.png", 
            route: '/work/CoDo'
        },
    
    ]
    return (
        <WorkSection id='work'>
            <Heading>Work</Heading>
            <GridContainer>
                {
                    projects.map(project => (
                        <ProjectCard project={project} key={project.title}/>
                    ))
                }
            </GridContainer>
        </WorkSection>
    )    
}

export default Work;