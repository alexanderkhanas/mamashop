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
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import { PrivateRoute, MobileRoute } from "./utils/utils";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import Catalog from "./pages/Catalog/Catalog";

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider {...{ store }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="/catalog" component={Catalog} />
          <PrivateRoute
            path="/profile"
            Component={Profile}
            redirectTo="/login"
            condition={true}
          />
          <MobileRoute
            path="/register"
            DesktopComponent={DesktopAuth}
            MobileComponent={Registration}
          />
          <MobileRoute
            path="/login"
            DesktopComponent={DesktopAuth}
            MobileComponent={MobileAuth}
          />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
