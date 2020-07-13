import React from "react";
import s from "./Cart.module.css";
import product from "./CardProduct";
import CartItem from "./../../misc/CartItem/CartItem";
import Button from "./../../misc/Buttons/Button";

const Cart = (props) => {
  return (
    <div className={s.body}>
      <div className={s.container}>
        <h4 className={s.title}>Ваша Корзина</h4>
        <div>
          {product.map((product, i) => (
            <CartItem key={i} {...{ product }}>
              {`${product.title}, ${product.gallery}, ${product.price}`}
            </CartItem>
          ))}
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Cart;
