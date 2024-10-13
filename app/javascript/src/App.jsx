import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  // eslint-disable-next-line no-console
  console.log("in app.jsx");

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route path="/about" render={() => <div>About</div>} />
      </Switch>
    </Router>
  );
};

export default App;
