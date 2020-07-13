import React from "react";
import s from "./Button.module.css";

const Button = ({ title, onClick = () => {}, Icon, className, ...rest }) => {
  return (
    <button className={`${s.button} ${className}`} {...{ onClick }} {...rest}>
      {!!Icon && Icon}
      {title}
    </button>
  );
};

export default Button;
