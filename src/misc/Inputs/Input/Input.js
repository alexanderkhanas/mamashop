import React from "react";
import s from "./Input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ Icon, type = "text", placeholder, ...rest }) => {
  return (
    <div className={s.container__input}>
      <input
        {...{ type }}
        {...rest}
        className={s.input}
        {...{ placeholder }}
        {...rest}
      />
      {!!Icon && <Icon className={s.eye} />}
    </div>
  );
};

export default Input;
