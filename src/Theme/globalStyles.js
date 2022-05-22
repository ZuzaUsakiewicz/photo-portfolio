import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, *, *::after, *::before {
       padding: 0;
       margin:0;
       box-sizing: border-box; 
    }
    
    body {
    overflow-X: hidden;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Smooch Sans', sans-serif;
    transition: all 0.50s linear;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-height: 200vh;
    }

    h1 { 
    font-size: 2em;
    }
    h2 { 
    font-size: 1.7411em; }
    h3 { font-size: 1.5157em; }
    h4 { font-size: 1.3195em; }
    h5 { font-size: 1.1487em; }
    p { font-size: 1em; }
    footer { font-size: .8706em; }

    button {
      cursor: pointer;
      font-family: inherit;
      border: none; 
    }


`;
