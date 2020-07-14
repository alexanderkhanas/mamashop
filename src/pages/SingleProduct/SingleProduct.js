import React, { useState, useEffect } from "react";
import s from "./SingleProduct.module.css";
import { faHome, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumbs from "../../misc/BreadCrumbs/BreadCrumbs";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import CardWrapper from "../../wrappers/CardWrapper/CardWrapper";
import Carousel from "../../misc/Carousel/Carousel";
import { product, reviews } from "./product";
import Button from "../../misc/Buttons/Button";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import Stars from "../../misc/Stars/Stars";
import Input from "../../misc/Inputs/Input/Input";
import { Formik } from "formik";
import { connect } from "react-redux";
import { getProductById } from "../../store/actions/singleProduct";

const SingleProduct = ({ product, getProductById, match }) => {
  const { title, gallery, price, desc } = product || {};
  const breadCrumbsItems = [
    {
      name: "Головна",
      path: "/",
      icon: <FontAwesomeIcon icon={faHome} className={s.icon} />,
    },
    { name: "Каталог", path: "/catalog" },
    { name: "Іграшки", path: "/catalog/toys" },
    { name: "Андрій Гриньків", path: "/profile" },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [formRate, setFormRate] = useState(4);

  useEffect(() => {
    getProductById(match.params.id);
  }, []);

  console.log(product);

  return (
    !!product && (
      <MainWrapper>
        <BreadCrumbs items={breadCrumbsItems} />
        {window.innerWidth > 850 ? (
          <div className={s.desktop__card}>
            <div className={s.desktop__card__container}>
              <div className={s.new__tag}>
                <span>New</span>
              </div>

              <Carousel images={gallery} />
              <CardWrapper className={s.desktop__card__info__cont}>
                <div className={s.desktop__card__info}>
                  <div className={s.desktop__card__texts}>
                    <h2 className={s.desktop__card__title}>{title}</h2>
                    <p className={s.desktop__card__desc}>
                      {desc.slice(0, 300)}...
                      <button onClick={() => {}}>Дізнатись більше</button>
                      <Stars containerClass={s.stars} value={4} />
                    </p>
                  </div>
                  <div className={s.desktop__card__actions}>
                    <h3>{price}₴ </h3>
                    <Button
                      title="Купити"
                      Icon={<FontAwesomeIcon icon={faShoppingBag} />}
                    />
                  </div>
                </div>
              </CardWrapper>
            </div>
          </div>
        ) : (
          <div className={s.mobile__card}>
            <CardWrapper className={s.mobile__card__info__cont}>
              <div className={s.mobile__card__info}>
                <div className={s.mobile__card__texts}>
                  <h2 className={s.mobile__card__title}>{title}</h2>
                  <Carousel
                    images={gallery}
                    className={s.mobile__card__gallery}
                  />
                  {/* <p className={s.mobile__card__desc}>
                  {desc.slice(0, 300)}...
                  <button onClick={() => {}}>Дізнатись більше</button>
                  <Stars containerClass={s.stars} value={4} />
                </p> */}
                </div>
                <div className={s.mobile__card__actions}>
                  <h3 className={s.mobile__card__price}>{price}₴ </h3>
                  <Button
                    title="Купити"
                    Icon={<FontAwesomeIcon icon={faShoppingBag} />}
                  />
                </div>
              </div>
            </CardWrapper>
          </div>
        )}
        <div className={s.desc}>
          <Tabs>
            <TabList
              onChange={(e) => console.log(e)}
              className={s.tabs__container}
            >
              {["Опис", "Характеристики", "Відгуки", "Доставка і оплата"].map(
                (item, i) => (
                  <Tab
                    key={i}
                    className={
                      i === activeTabIndex ? `${s.tab} ${s.tab__active}` : s.tab
                    }
                    onClick={() => setActiveTabIndex(i)}
                  >
                    {item}
                  </Tab>
                )
              )}
            </TabList>
            <TabPanel>
              <p className={s.desktop__card__desc}>{desc}</p>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              {reviews.map(({ name, mark, body }, i) => (
                <div className={s.review} key={i}>
                  <div className={s.review__header}>
                    <span className={s.review__name}>{name}</span>
                    <Stars value={mark} />
                  </div>
                  <p className={s.review__body}>{body}</p>
                </div>
              ))}
              <Formik
                initialValues={{ name: "", review: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "Поле є обов'язковим";
                  }
                  if (!values.review) {
                    errors.review = "Поле є обов'язковим";
                  }
                  return errors;
                }}
                onSubmit={() => {
                  console.log("submit");
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => {
                  return (
                    <CardWrapper>
                      <form onSubmit={handleSubmit}>
                        <h5>Залишити відгук</h5>
                        <Stars
                          setValue={setFormRate}
                          value={formRate}
                          containerClass={s.stars}
                          isStatic={false}
                        />
                        <Input
                          containerClass={s.margin__bottom}
                          label="Ваше ім'я"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isError={!!errors.name && !!touched.name}
                          placeholder="Іван"
                          name="name"
                          value={values.name}
                        />
                        <Input
                          label="Ваш відгук"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.review}
                          isError={!!errors.review && !!touched.review}
                          name="review"
                          placeholder="Все сподобалось, товар хорошої якості"
                        />
                        <Button
                          className={s.submit__review__button}
                          type="submit"
                          isError={!values.review && !values.name}
                          disabled={!values.review && !values.name}
                          title="Залишити відгук"
                        />
                      </form>
                    </CardWrapper>
                  );
                }}
              </Formik>
            </TabPanel>
            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
          </Tabs>
        </div>
      </MainWrapper>
    )
  );
};

function mapStateToProps(state) {
  return {
    product: state.singleProduct.product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProductById: (id) => dispatch(getProductById(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
