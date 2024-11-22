import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

// Styled Components
const CardContainer = styled.div`
  width: 90%; /* Full width for smaller screens */
  max-width: 750px; /* Restrict max width on larger screens */
  min-height: 850px; /* Ensure minimum height for the card */
  background: #fae7cc;
  border-radius: 25px;
  position: relative; /* Enables positioning for child elements */
  margin: 1rem auto; /* Center the card with spacing */
  overflow: hidden; /* Prevent overflow of inner elements */

  @media (max-width: 768px) {
    min-height: 700px; /* Adjust minimum height for smaller screens */
  }

  @media (max-width: 480px) {
    width: 95%; /* Increase width slightly for very small screens */
    min-height: 600px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 25vh; /* Dynamically scale with viewport height */
  object-fit: cover; /* Ensures the image scales properly */
  border-radius: 10px 10px 0 0; /* Rounded corners for the top */
`;

const CardContent = styled.div`
  padding: 1rem 2rem;

  @media (max-width: 480px) {
    padding: 1rem; /* Reduce padding on smaller screens */
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow tags to wrap */
  gap: 0.5rem; /* Space between tags */
  position: absolute; /* Stick tags to the bottom */
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  justify-content: center; /* Center the tags for better appearance */

  @media (max-width: 480px) {
    gap: 0.3rem; /* Reduce spacing between tags on smaller screens */
  }
`;

const Tag = styled.span`
  background: #f9cc8c;
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  white-space: nowrap; /* Prevent text inside the tag from wrapping */
  font-size: clamp(0.8rem, 1.5vw, 1rem); /* Responsive font size */

  @media (max-width: 480px) {
    padding: 0.4rem 1rem; /* Reduce padding for smaller screens */
  }
`;

const StyledTitle = styled(Typography)`
  color: #3c4858;
  font-size: clamp(1.5rem, 3vw, 2rem); /* Responsive font scaling */
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: clamp(1.3rem, 4vw, 1.5rem); /* Adjust title size for smaller screens */
  }
`;

const StyledDescription = styled(Typography)`
  color: rgba(0, 0, 0, 0.7); /* Text secondary color */
  font-size: clamp(1rem, 2.5vw, 1.2rem); /* Responsive font scaling */

  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 2vw, 1rem); /* Adjust description size for smaller screens */
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <CardContainer>
      {/* Project Image */}
      <CardImage src={project.img} alt={project.title} />

      {/* Content */}
      <CardContent>
        <StyledTitle gutterBottom variant="h3">
          {project.title}
        </StyledTitle>
        <StyledDescription variant="subtitle1">
          {project.desc}
        </StyledDescription>
      </CardContent>

      {/* Tags */}
      <TagsContainer>
        {project.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
    </CardContainer>
  );
};

export default ProjectCard;
