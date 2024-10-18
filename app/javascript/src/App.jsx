import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import CreateTask from "components/Tasks/Create";

import Dashboard from "./components/Dashboard";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route path="/about" render={() => <div>About</div>} />
      <Route exact component={Dashboard} path="/dashboard" />
      <Route exact component={CreateTask} path="/tasks/create" />
    </Switch>
  </Router>
);

export default App;
