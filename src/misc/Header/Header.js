import React, { useState, useEffect } from "react";
import s from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faSearch,
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { stack as Menu } from "react-burger-menu";
import { Link, withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.cart}>
          <FontAwesomeIcon icon={faShoppingCart} color="white" />
        </div>
      </header>
      <div className={s.subHeader}>
        <div className={s.catalog}>
          <FontAwesomeIcon icon={faBook} color="white" />
          <span> Каталог</span>
        </div>
        <div className={s.search}>
          <FontAwesomeIcon icon={faSearch} color="white" />
        </div>
      </div>
    </>
  );
};

export default Header;
