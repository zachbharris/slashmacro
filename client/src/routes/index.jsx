import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// routes
import Home from "./Home";
import NotFound from "./NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Routes;
