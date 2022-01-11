import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Home from 'pages/Home/Home';

const Root = () => {
  const [themeMode, setThemeMode] = useState('light');
  const handleChangeTheme = () => (themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light'));
  return (
    <ThemeProvider theme={themeMode === 'light' ? theme.light : theme.dark}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handleChangeTheme={handleChangeTheme} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Root;
