import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Work = () => {
    const projects = [
        {
            title: "SafeHands", 
            desc: "An AI hand detection tool that uses a web app to specify hazardous areas for extra protection to manufacturing workers. Won top prize in AI+ Day 2022 (Taipei).", 
            tags: ['ReactJS', 'Flask Python', 'RESTfulAPI', 'NGINX', 'SemanticUI', 'Redis Server', 'Ubuntu Environment', 'Figma'], 
            img: "/SafeHands/punch_example1.png", 
            route: '/work/SafeHands'
        },
        {
            title: "NU LPR 101", 
            desc: "An AI hand detection tool that uses a web app to specify hazardous areas for extra protection to manufacturing workers. Won top prize in AI+ Day 2022 (Taipei).", 
            tags: ['ReactJS', 'Flask Python', 'RESTfulAPI', 'NGINX', 'SemanticUI', 'Redis Server', 'Ubuntu Environment','Figma'], 
            img: "/NULPR101/cars.png", 
            route: '/work/NULPR101'
        },
        {
            title: "AkadsPH", 
            desc: "An all-in-one tutoring platform, that helps parents find tutors for their kids.", 
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
            desc: "A condominium/dormitory companion mockup project that was done through InVision.", 
            tags: ['InVision'], 
            img: "/CoDo/codo_preview.png", 
            route: '/work/CoDo'
        },
    
    ]
    return (
        <div>
            <h2 style={{fontSize:"5rem"}}>Work</h2>
            <div  style={{
                    display: 'flex',
                    flexWrap: 'wrap', // Enable wrapping
                    gap: '10rem',  
                }}
            >
                {
                    projects.map(project => (
                        <ProjectCard project={project}/>
                    ))
                }
            </div>
        </div>
    )    
}

export default Work;