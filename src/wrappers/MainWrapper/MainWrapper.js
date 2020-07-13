import React from "react";
import s from "./MainWrapper.module.css";

const MainWrapper = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default MainWrapper;
