import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 1rem 0;
  z-index: 900;
  width: 90%;
  right: 0;
  margin-right: 6vw;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.7rem 1.5rem;
  backdrop-filter: blur(15px);
  border-radius: 50px;

  &.scrolled {
    backdrop-filter: blur(15px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const NavItems = styled.ul`
  display: flex;
  gap: 2.5vw;
  list-style: none;
  background-color: transparent;

  li {
    font-size: clamp(0.8rem, 1.3vw, 1.7rem);
    font-weight: 600;
    color: #333366;
    padding: 0.5rem 0.75rem;
    background: none;
    cursor: pointer;

    &.active {
      background-color: rgba(147, 112, 219, 0.2);
      padding: 0.5rem 0.8rem;
      border-radius: 40px;
    }

    &:hover {
      color: #6a5acd;
    }
  }
`;

const Spacer = styled.div`
  height: 80px;
`;

const LogoImg = styled.img`
  padding: 1rem 1rem;
  z-index: 2000;
  width: 6.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll('section'); // Add `id` attributes to sections
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when at least 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the currently visible section
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Spacer />
      <NavBar>
        <NavItemsContainer className={scrolled ? 'scrolled' : ''}>
          <NavItems>
            <li
              onClick={() => scrollToSection('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection('work')}
              className={activeSection === 'work' ? 'active' : ''}
            >
              Work
            </li>
            <li
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </li>
            <li
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </li>
          </NavItems>
        </NavItemsContainer>
      </NavBar>
    </>
  );
};

export default Navbar;
