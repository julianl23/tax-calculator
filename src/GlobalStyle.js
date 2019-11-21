import { createGlobalStyle } from "styled-components";

import RobotoRegular from "./fonts/Roboto-Regular.ttf";
import RobotoMedium from "./fonts/Roboto-Medium.ttf";
import RobotoBold from "./fonts/Roboto-Bold.ttf";
import Alata from "./fonts/Alata-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-weight: normal
    src: url(${RobotoRegular});
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 300
    src: url(${RobotoMedium});
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500
    src: url(${RobotoBold});
  }

  @font-face {
    font-family: 'Alata';
    font-weight: normal;
    src: url(${Alata});
  }

  * { 
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #363636;
  }
`;

export default GlobalStyle;
