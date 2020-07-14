import React, { useEffect, useState } from "react";
import s from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import CardWrapper from "../../wrappers/CardWrapper/CardWrapper";

const CartItem = ({ product, remove }) => {
  const { title, gallery, price, id } = product;
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
    <CardWrapper>
      <div className={s.desktop__card__actions}>
        <div>
          <img src={gallery[1]} className={s.img} />
        </div>
        <div className={s.custom__wrapper}>
          <h3>{title}</h3>
          <div className={s.item__down__wrapper}>
            <div className={s.card_items}>
              <span>${price}</span>
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
            <div className={s.icon}>
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => remove(id)} />
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default CartItem;
