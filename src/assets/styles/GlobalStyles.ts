import { createGlobalStyle } from 'styled-components';
import Reset from './Reset';
import TextElement from './TextElementReset';

// do not use @font-face in creatGlobalStyle, it sometimes causes
// fonts to get requested frequently resulting in a 'font-flicker'

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${TextElement}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    position: relative;
    background-color: ${(props) => props.theme.primaryWhite};
    color: ${(props) => props.theme.secondaryBlack};
    font-family: ${(props) => props.theme.font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles;
