import React from "react";
import s from "./Button.module.css";

function Button() {
  return (
    <div>
      <button className={s.button}>Увійти в кабінет</button>
    </div>
  );
}

export default Button;
