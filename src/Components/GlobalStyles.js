import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height:1.625;
    letter-spacing:-0.5px;
  }
  h1 {
    padding: 0 0 20px;
    font-size: 36px;
    font-weight: bold;
  }
  h2 {
    padding: 0 0 20px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export default globalStyles;
