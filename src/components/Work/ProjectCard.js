import { Typography } from "@material-ui/core";
import React from "react";
const ProjectCard = ({project}) => {
    const tagContainer = (label) => {
        return(
            <span
                style={{
                background: '#F9CC8C',
                borderRadius: '50px',
                padding: '0.5rem 1.2rem',
                whiteSpace: 'nowrap', // Prevent text inside the tag from wrapping
                }}
            >
                {label}
            </span>
        )
    }
    return (
        <>
            <div style={{width: '650px', height: '750px', background: '#FAE7CC', borderRadius: '25px', position: "relative"}}>
            <img
                src={project.img}
                alt={project.title}
                style={{ width: '100%', height: 395, objectFit: 'cover',  backgroundSize: "cover", borderRadius: '10px 10px 0 0' }}
            />
                <div style={{padding: '1rem 2rem'}}>
                    <Typography gutterBottom variant="h3" sx={{color: "#3C4858"}}>
                        {project.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary'}}>
                        {project.desc}
                    </Typography>
                    <div  style={{
                            display: 'flex',
                            flexWrap: 'wrap', // Enable wrapping
                            gap: '0.5rem',    // Space between tags
                            marginBottom: '2rem',
                            marginTop: '1rem',
                            bottom: "0",
                            position: "absolute"
                        }}
                    >
                        {project.tags.map(t => (
                            tagContainer(t)
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;