import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import ArticleIcon from '@mui/icons-material/Article';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LaunchIcon from '@material-ui/icons/Launch'
import DescriptionIcon from '@material-ui/icons/Description';
import './ProjectContainer.css'
import { useState } from 'react';
import { Link } from "react-router-dom";

const ProjectContainer = ({ project }) => (
  <Link to={project.link}>
    <div className='project'   onClick={() => console.log('going to its page')}>
      <img src={project.image} style={{width:'80px'}}></img>
      <div className='projectDetails'>
        <h3>{project.name}</h3>
        <p className='project__description'>{project.description}</p>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
          >
            <GitHubIcon />
          </a>
        )}

        {project.youtubeVid && (
          <a
            href={project.youtubeVid}
            aria-label='youtube vid'
            className='link link--icon'
          >
            <YouTubeIcon />
          </a>
        )}

        {project.paper && (
          <a
            href={project.paper}
            aria-label='paper'
            className='link link--icon'
          >
            <DescriptionIcon/>
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon />
          </a>
        )} */}
      </div>
      
    </div>
  </Link>
)

export default ProjectContainer
