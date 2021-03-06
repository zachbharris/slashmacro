import React, { useEffect } from "react";
import { useActions } from "easy-peasy";
import { createGlobalStyle } from "styled-components";
import "semantic-ui-css/semantic.min.css";

import Routes from "./routes";

const App = () => {
  const userSession = useActions(actions => actions.getUserSession);
  useEffect(() => {
    userSession();
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="app">
        <Routes />
      </div>
    </>
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
