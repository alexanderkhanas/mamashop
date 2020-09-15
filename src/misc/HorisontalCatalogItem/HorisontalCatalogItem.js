import React from "react";
import s from "./HorisontalCatalogItem.module.css";

const HorisontalCatalogItem = (props) => {
  return (
    <div className={s.card}>
      <img
        src="https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
        alt="Denim Jeans"
        className={s.img__container}
      />
      <h1>Tailored Jeans</h1>
      <p clasName={s.price}>$19.99</p>
      <p>Some text about the jeans..</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
};

export default HorisontalCatalogItem;
