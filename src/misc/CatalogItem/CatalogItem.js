import React, { useState } from "react";
import s from "./CatalogItem.module.css";
import CardWrapper from "../../wrappers/CardWrapper/CardWrapper";
import Stars from "../../misc/Stars/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const CatalogItem = ({ title, price }) => {
  const [formRate, setFormRate] = useState(3);
  return (
    <CardWrapper>
      <div className={s.desktop__card__actions}>
        <div>
          <img
            src="https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
            className={s.img}
          />
        </div>
        <div className={s.custom__wrapper}>
          <Stars
            className={s.stars}
            setValue={setFormRate}
            value={formRate}
            isStatic={false}
          />
          <h3>{title}</h3>

          <span className={s.price}>${price}</span>
          <div className={s.icon}>
            <span className={s.buy__item}>Купити</span>
            <FontAwesomeIcon icon={faShoppingBag} color="#ff0066" />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default CatalogItem;
