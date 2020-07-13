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
import Registration from "./pages/MobileRegister/MobileRegister";
import DesktopAuth from "./pages/DesktopAuth/DesktopAuth";
import Profile from "./pages/Profile/Profile";
import { PrivateRoute, MobileRoute } from "./utils/utils";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:name" component={SingleProduct} />
        <PrivateRoute
          path="/profile"
          Component={Profile}
          redirectTo="/login"
          condition={true}
        />
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
