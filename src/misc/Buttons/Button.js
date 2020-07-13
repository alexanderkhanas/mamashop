import React from "react";
import s from "./Button.module.css";

const Button = ({
  title,
  onClick = () => {},
  Icon,
  className,
  isError,
  ...rest
}) => {
  const classes = isError
    ? `${s.button} ${className} ${s.button__error}`
    : `${s.button} ${className}`;

  return (
    <button className={classes} {...{ onClick }} {...rest}>
      {!!Icon && Icon}
      {title}
    </button>
  );
};

export default Button;
