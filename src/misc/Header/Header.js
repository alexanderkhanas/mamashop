import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faSearch,
  faBars,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.menu}>
          <FontAwesomeIcon icon={faBars} color="white" />
        </div>
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
