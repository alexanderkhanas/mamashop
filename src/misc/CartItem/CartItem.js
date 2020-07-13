import React, { useEffect, useState } from "react";
import s from "./CartItem.module.css";
import product from "./../../pages/Cart/CardProduct";

const CartItem = ({ product }) => {
  const { title, gallery, price } = product;
  const [counter, setCounter] = useState(1);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter <= 1) {
      return 0;
    }
    setCounter(counter - 1);
  };
  useEffect(() => {
    console.log(counter);
  }, [counter]);
  return (
    <div>
      <div>{title}</div>
      <div className={s.couner}>
        <button onClick={decreaseCounter} className={s.counter}>
          -
        </button>
        {counter}
        <button onClick={increaseCounter} className={s.counter}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
