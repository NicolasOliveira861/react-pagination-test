import React from "react";
import { Switch, Route } from "react-router-dom";

import Test from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Test} />
    </Switch>
  );
};

export default Routes;
