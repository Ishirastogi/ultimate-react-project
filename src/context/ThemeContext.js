import React, { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

const lightTheme = {
  background: "#ffffff",
  color: "#000000",
};

const darkTheme = {
  background: "#000000",
  color: "#ffffff",
};

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
