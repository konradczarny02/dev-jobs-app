import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import ThemeProviderMode from 'providers/ThemeProviderMode';
import Home from 'pages/Home/Home';
import JobsProvider from 'providers/JobsProvider';
import Details from 'pages/Details/Details';

const Root = () => {
  return (
    <ThemeProviderMode>
      <GlobalStyles />
      <BrowserRouter>
        <JobsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details/:company" element={<Details />} />
          </Routes>
        </JobsProvider>
      </BrowserRouter>
    </ThemeProviderMode>
  );
};

export default Root;
