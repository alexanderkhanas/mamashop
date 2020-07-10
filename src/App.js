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
import MobileAuth from "./pages/MobileAuth/MobileAuth";
import Registration from "./pages/Registration/Registration";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/login">
          <MobileAuth />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
