import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from "./components/LoginPage/LoginPage";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import OuterPage from "./components/OuterPage/OuterPage"; 
import Register from "./components/LoginPage/register";
import './components/LoginPage/register.css';
import './components/LoginPage/LoginPage.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={OuterPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
