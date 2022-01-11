import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background}
  }

  a, button {
    font-family: 'Kumbh Sans', sans-serif;
  }
`;
