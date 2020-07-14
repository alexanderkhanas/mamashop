import React, { useState, useEffect } from "react";
import s from "./Cart.module.css";
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BreadCrumbs from "./../../misc/BreadCrumbs/BreadCrumbs";
import product from "./CartProduct";
import CartItem from "../../misc/CartItem/CartItem";
import Button from "./../../misc/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import { useHistory } from "react-router-dom";

const breadCrumbsItems = [
  {
    name: "Головна",
    path: "/",
    icon: <FontAwesomeIcon icon={faHome} className={s.icon} />,
  },
  { name: "Корзина", path: "/cart" },
];

const Cart = (props) => {
  const [list, updateList] = useState(product);

  const handleRemoveProduct = (id) => {
    updateList(list.filter((product) => product.id !== id));
  };

  console.log(props);
  const [sumPrice, setSumPrice] = useState();

  useEffect(() => {
    const price = list.reduce(
      (totalPrice, product) => totalPrice + product.price,
      0
    );
    setSumPrice(price);
  }, [list]);
  const h = useHistory();
  return (
    <MainWrapper>
      <BreadCrumbs items={breadCrumbsItems} />
      <div className={s.body}>
        <div className={s.container}>
          <h1 className={s.title}>Ваша Корзина</h1>
          <div>
            {list.map((product, i) => (
              <CartItem
                key={i}
                {...{ product }}
                remove={handleRemoveProduct}
              ></CartItem>
            ))}
          </div>
          <div className={s.bottom_container}>
            <div className={s.bottom_price}>
              <div className={s.sum}>
                Сума
                <div className={s.number}> ${sumPrice}</div>
              </div>
              <div className={s.bonus}>
                Бонуси
                <div className={s.number}> ${sumPrice}</div>
              </div>
            </div>
            <div className={s.bottom_bt}>
              <button
                onClick={() => {
                  h.goBack();
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Продовжити покупки
              </button>
              <div className={s.button__container} items={breadCrumbsItems}>
                <Button
                  style={{
                    textTransform: "capitalize",
                    backgroundColor: "#61dafb",
                  }}
                  title="Оформити"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Cart;
