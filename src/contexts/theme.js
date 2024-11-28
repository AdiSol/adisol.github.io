import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

export const TitleStyle = styled.h2`
font-size: clamp(2rem, 5vw, 5rem);
margin-left: 1rem;
`;

export const Section = styled.section`
  display: flex;
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
const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    const isDark = localStorage.getItem('themeName') === 'dark'
    if (isDark) {
      setThemeName('dark')
    } else {
      setThemeName('light')
    }
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
