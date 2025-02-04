import React from "react";
import styled from "styled-components";

// Styled Components


const CardContainer = styled.div`
  background: #fae7cc;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 30vh; //830px;

  /* Mobile (Phones) */
  @media (max-width: 600px) { 
    min-height: 500px; /* Smaller height for mobile */
  }

  /* Tablets (iPads, Zenbook Fold, etc.), ensuring it doesn't affect mobile */
  @media (min-width: 601px) and (max-width: 1024px) { 
    min-height: 700px;
  }

  /* Nest Hub */
  @media (min-width: 801px) and (max-width: 1024px) { 
    min-height: 470px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 25vh; 
  object-fit: cover;
  border-radius: 10px 10px 0 0;

  @media (max-width: 800px) {
    height: 50vh; 
  }

  @media (max-width: 1024px) { 
    height: 45vh;
  }
`;

const CardContent = styled.div`
  padding: 1rem 2rem;
  flex-grow: 1; /* Makes the description take up only necessary space */

  @media (max-width: 1024px) { /* iPad & Zenbook Fold */
    padding-bottom: 0.5rem; /* Reduce extra space below description */
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;

  @media (max-width: 800px) { 
    margin-bottom: 0.5rem; 
    justify-content: center;
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
