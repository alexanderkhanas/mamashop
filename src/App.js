import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./misc/Header/Header";
import Footer from "./misc/Footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/DesktopAuth/DesktopAuth";
import MobileAuth from "./pages/MobileAuth/MobileAuth";
import Registration from "./pages/Registration/Registration";
import DesktopAuth from "./pages/DesktopAuth/DesktopAuth";

const MobileRoute = ({ path, DesktopComponent, MobileComponent }) => {
  return (
    <Route
      component={window.innerWidth <= 500 ? MobileComponent : DesktopComponent}
      {...{ path }}
    />
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <MobileRoute
          path="/register"
          DesktopComponent={DesktopAuth}
          MobileComponent={MobileAuth}
        />
        <MobileRoute
          path="/login"
          DesktopComponent={DesktopAuth}
          MobileComponent={Registration}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
