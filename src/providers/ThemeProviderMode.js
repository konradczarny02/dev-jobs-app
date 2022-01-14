import React, { useState } from 'react';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = React.createContext({
  theme: 'light',
  handleChangeTheme: () => {},
});

const ThemeProviderMode = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const handleChangeTheme = () => (themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light'));
  return (
    <ThemeContext.Provider value={{ theme: themeMode, handleChangeTheme }}>
      <ThemeProvider theme={themeMode === 'light' ? theme.light : theme.dark}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderMode;
