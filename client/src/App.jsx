import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "styled-theming";
import "semantic-ui-css/semantic.min.css";

import { black, white } from "./theme/colors";
import Routes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={{ mode: "dark" }}>
      <>
        <GlobalStyles />
        <div className="app">
          <Routes />
        </div>
      </>
    </ThemeProvider>
  );
};

const backgroundColor = theme("mode", {
  light: white,
  dark: black
});

const fontColor = theme("mode", {
  light: black,
  dark: white
});

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${backgroundColor};
    color: ${fontColor};
    font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`;

export default App;
