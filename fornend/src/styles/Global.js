import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
    
    
  }
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    // width: 100%;
    // top: 0;
    // left: 0;

    // z-index: 1;
    // font-size: 1.4rem;
  
  }
`;

export default GlobalStyles;