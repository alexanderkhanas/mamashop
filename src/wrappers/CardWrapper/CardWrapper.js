import React from "react";
import s from "./CardWrapper.module.css";

const CardWrapper = ({ children, maxWidth, className, style: customStyle }) => {
  const style = maxWidth
    ? { maxWidth, margin: "30px auto", ...customStyle }
    : customStyle;
  return (
    <div className={`${s.card} ${className}`} {...{ style }}>
      <div className={s.card__inner}>{children}</div>
    </div>
  );
};

export default CardWrapper;
