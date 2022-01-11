import { createGlobalStyle } from 'styled-components';
import bgMobileSvg from 'assets/images/bgMobile.svg';
import bgDesktopSvg from 'assets/images/bgDesktop.svg';
import bgTabletSvg from 'assets/images/bgTablet.svg';
import bgFHDSvg from 'assets/images/bgFHD.svg';
import bg2KSvg from 'assets/images/bg2K.svg';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-image: ${`url(${bgMobileSvg})`};
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.background};

    @media (min-width: 376px) {
      background-image: ${`url(${bgTabletSvg})`};
    }

    @media (min-width: 769px) {
      background-image: ${`url(${bgDesktopSvg})`};
    }
    
    @media (min-width: 1441px) {
      background-image: ${`url(${bgFHDSvg})`};
    }
    
    @media (min-width: 1921px) {
      background-image: ${`url(${bg2KSvg})`};
    }
    
  }

  a, input, button {
    font-family: 'Kumbh Sans', sans-serif;
  }
`;
