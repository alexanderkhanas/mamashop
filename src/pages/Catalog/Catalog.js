import React, { useState, useEffect } from "react";
import s from "./Catalog.module.css";
import BreadCrumbs from "../../misc/BreadCrumbs/BreadCrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTh, faList } from "@fortawesome/free-solid-svg-icons";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import CatalogItem from "../../misc/CatalogItem/CatalogItem";
import Button from "../../misc/Buttons/Button";
import HorisontalCatalogItem from "../../misc/HorisontalCatalogItem/HorisontalCatalogItem";
import { getProductsAction } from "../../store/actions/productsActions";
import { connect } from "react-redux";
import product from "../Cart/CartProduct";

const Catalog = ({ getProducts }) => {
  const [productViewType, setProductViewType] = useState("row");
  const switchProductViewType = () => {
    setProductViewType((prev) => (prev === "row" ? "column" : "row"));
  };
  const breadCrumbsItems = [
    {
      name: "Головна",
      path: "/",
      icon: <FontAwesomeIcon icon={faHome} className={s.icon} />,
    },
    { name: "Каталог", path: "/catalog" },
  ];
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <MainWrapper>
      <BreadCrumbs items={breadCrumbsItems} />
      <div className={s.body}>
        <div className={s.title}>Каталог товарів</div>
        <div className={s.change__view__container}>
          <div>
            <Button
              onClick={switchProductViewType}
              icon={faTh}
              isSecondary={productViewType === "column"}
              color="black"
            />
          </div>
          <div>
            <Button
              onClick={switchProductViewType}
              icon={faList}
              isSecondary={productViewType === "row"}
            />
          </div>
        </div>
        <div className={s.products}>
          {/* {filteredProducts.map((product, i) =>
            productViewType === "row" ? (
              <CatalogItem
                className={s.product__card}
                key={product._id}
                {...{ product }}
              />
            ) : (
              <HorisontalCatalogItem {...{ product }} key={product._id} />
            )
          )} */}
          {/* [...Array(10)].map(product) {
          productViewType === "row" ? (
            <CatalogItem
                className={s.product__card} />
          ) : (<HorisontalCatalogItem {...{ product }} key={product._id} */}
        </div>
        <div className={s.product__container} />
        <CatalogItem title="1qwe" price="qdasdq" />
      </div>
      <HorisontalCatalogItem />
      <HorisontalCatalogItem />
      <HorisontalCatalogItem />
      <HorisontalCatalogItem />
    </MainWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProductsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
