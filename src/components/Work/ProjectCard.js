import React from "react";
import styled from "styled-components";

// Styled Components


const CardImage = styled.img`
  width: 100%;
  height: 25vh; /* Dynamically scale with viewport height */
  object-fit: cover; /* Ensures the image scales properly */
  border-radius: 10px 10px 0 0; /* Rounded corners for the top */
`;

const CardContainer = styled.div`
  background: #fae7cc;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 830px;

  @media (max-width: 768px) {
    min-height: 600px;
  }

  @media (max-width: 480px) {
    min-height: auto; /* Allow natural height adjustment */
  }
`;

const CardContent = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allows content to push down the tags */
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto; /* Pushes tags to the bottom */
  padding: 1rem; /* Adds space around the tags */
  margin-bottom: 0.1rem; /* Ensures space from the bottom of the card */

  @media (max-width: 480px) {
    gap: 0.3rem;
    padding: 0.8rem; /* Adjust padding for smaller screens */
    margin-bottom: 0.1rem;
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

const StyledTitle = styled.h3`
  color: #3c4858;
  font-size: clamp(1.5rem, 3vw, 2rem); /* Responsive font scaling */
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: clamp(1.3rem, 4vw, 1.5rem); /* Adjust title size for smaller screens */
  }
`;

const StyledDescription = styled.p`
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
        <StyledTitle>
          {project.title}
        </StyledTitle>
        <StyledDescription>
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
