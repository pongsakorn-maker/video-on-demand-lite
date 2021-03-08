import React from "react";
import Signup from "./authentication/Signup";
import SignIn from "./authentication/SignIn";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from './authentication/Profile'
import PrivateRoute from './authentication/PrivateRoute'
import ForgotPassword from './authentication/ForgotPassword'
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from './dashboard/Dashboard'
function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
              <PrivateRoute path="/user" component={Profile}/>
              <PrivateRoute path="/update-profile" component={UpdateProfile}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/forgot-password" component={ForgotPassword}/>
            </Switch>
          </AuthProvider>
        </Router>
  );
}

export default App;
