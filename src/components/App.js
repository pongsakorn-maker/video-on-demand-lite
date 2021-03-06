import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Authentication/Signup";
import SignIn from "./Authentication/SignIn";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard'
import PrivateRoute from './Authentication/PrivateRoute'
import ForgotPassword from './Authentication/ForgotPassword'
import UpdateProfile from "./Authentication/UpdateProfile";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard}/>
              <PrivateRoute path="/update-profile" component={UpdateProfile}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/forgot-password" component={ForgotPassword}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
