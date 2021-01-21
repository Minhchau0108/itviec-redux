import React from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "./components/Login";
import JobsList from "./components/JobsList";
import JobDetail from "./components/JobDetail";
import ProtectedRoute from './components/ProtectedRoute'
import PublicNavbar from './components/PublicNavbar'

function App() {
  return (
    <div className="App">
      <PublicNavbar/>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/jobs" exact component={JobsList} />
        <Route path="/" exact component={JobsList}/>
        <ProtectedRoute path="/jobs/:id" render={(props) => <JobDetail {...props}/>}/>
	    </Switch>
    </div>
  );
}

export default App;
