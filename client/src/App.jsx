import React from "react";
import { StoreProvider, createStore } from "easy-peasy";
import { createGlobalStyle } from "styled-components";
import "semantic-ui-css/semantic.min.css";

import model from "./model";
import Routes from "./routes";

const store = createStore(model);

const App = () => {
  return (
    <StoreProvider store={store}>
      <GlobalStyles />
      <div className="app">
        <Routes />
      </div>
    </StoreProvider>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`;

export default App;
