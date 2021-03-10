import React from "react";
import Signup from "./authentication/Signup";
import SignIn from "./authentication/SignIn";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./authentication/Profile";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./dashboard/Dashboard";
import SelectPlayer from "./dashboard/SelectPlayer"
import ReactPlayer from './player/ReactPlayer'
import ReactVideoRenderer from './player/ReactVideoRenderer'
import VideoJs from './player/VideoJs'
import ZoomableMedia from './player/ZoomableMedia'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/select/:fileId" component={SelectPlayer} />
          <PrivateRoute exact path="/react-player/:fileId" component={ReactPlayer} />
          <PrivateRoute exact path="/react-video-renderer/:fileId" component={ReactVideoRenderer} />
          <PrivateRoute exact path="/videojs/:fileId" component={VideoJs} />
          <PrivateRoute exact path="/zoomable-media/:fileId" component={ZoomableMedia} />
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={SignIn} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
