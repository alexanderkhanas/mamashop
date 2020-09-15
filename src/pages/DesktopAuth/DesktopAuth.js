import React, { useState } from "react";
import s from "./DesktopAuth.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import Input from "../../misc/Inputs/Input/Input";
import {
  faCheck,
  faCheckCircle,
  faExclamation,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { loginAction, registerAction } from "../../store/actions/profileAction";

const DesktopAuth = ({ login, register }) => {
  const [isRegister, setRegister] = useState(false);
  const setFormRegister = () => setRegister(true);
  const setFormLogin = () => setRegister(false);
  const formValidate = (values) => {
    const errors = {};
    if (values.password.length <= 5) {
      errors.password = "Занадто короткий пароль";
    }
    if (values.name && !values.name.length) {
      errors.name = "Введіть ім'я";
    }
    if (!values.email) {
      errors.email = "Введіть електронну пошту";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Невірно введена електронна пошта";
    }
    console.log(errors);

    return errors;
  };

  const SuccessIcon = () => (
    <FontAwesomeIcon
      icon={faCheckCircle}
      className={`${s.icon} ${s.success__icon}`}
    />
  );

  const ErrorIcon = () => (
    <FontAwesomeIcon
      icon={faExclamationCircle}
      className={`${s.icon} ${s.error__icon}`}
    />
  );

  return (
    <div>
      <div className={s.auth}>
        <div
          className={
            isRegister
              ? `${s.container} ${s["right-panel-active"]}`
              : `${s.container}`
          }
          id="container"
        >
          <div className={`${s["form-container"]} ${s["sign-up-container"]}`}>
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              validate={formValidate}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => {
                return (
                  <form action="#">
                    <h1>Створити акаунт</h1>

                    <Input
                      onChange={handleChange}
                      label="Ім'я"
                      onBlur={handleBlur}
                      Icon={!errors.name ? SuccessIcon : ErrorIcon}
                      name="name"
                      value={values.name}
                      type="text"
                      placeholder="Іван"
                    />
                    <Input
                      onChange={handleChange}
                      label="Електронна пошта"
                      onBlur={handleBlur}
                      Icon={!errors.email ? SuccessIcon : ErrorIcon}
                      name="email"
                      value={values.email}
                      type="email"
                      placeholder="example@gmail.com"
                    />
                    <Input
                      value={values.password}
                      label="Пароль"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      Icon={!errors.password ? SuccessIcon : ErrorIcon}
                      name="password"
                      type="password"
                      placeholder="••••••••"
                    />
                    <button>Зареєструватись</button>
                    <div className={`${s["social-container"]}`}>
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className={s.brand__icon}
                      />
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={s.brand__icon}
                      />
                    </div>
                    <span>
                      або використайте електронну пошту для реєстрації
                    </span>
                  </form>
                );
              }}
            </Formik>
          </div>
          <div className={`${s["form-container"]} ${s["sign-in-container"]}`}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={formValidate}
              onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <h1>Увійдіть, щоб робити покупки</h1>

                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    Icon={!errors.email ? SuccessIcon : ErrorIcon}
                    name="email"
                    label="Електронна пошта"
                    value={values.email}
                    type="email"
                    placeholder="example@gmail.com"
                  />
                  <Input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    Icon={!errors.password ? SuccessIcon : ErrorIcon}
                    name="password"
                    label="Пароль"
                    type="password"
                    placeholder="••••••••"
                  />
                  <a href="#">Забули пароль?</a>
                  <button>Увійти</button>
                  <div className={s["social-container"]}>
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className={s.brand__icon}
                    />
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className={s.brand__icon}
                    />
                  </div>
                  <span>або використайте електронну пошту </span>
                </form>
              )}
            </Formik>
          </div>
          <div className={s["overlay-container"]}>
            <div className={s.overlay}>
              <div className={`${s["overlay-panel"]} ${s["overlay-left"]}`}>
                <h1>Ласкаво просимо!</h1>
                <p>Щоб робити покупки увійдіть у свій обліковий запис</p>
                <button onClick={setFormLogin} className={s.ghost} id="signIn">
                  Увійти
                </button>
              </div>
              <div className={`${s["overlay-panel"]} ${s["overlay-right"]}`}>
                <h1>Раді вас бачити!</h1>
                <p>Зареєструйтесь, якщо ви у нас вперше </p>
                <button
                  onClick={setFormRegister}
                  className={s.ghost}
                  id="signUp"
                >
                  Зареєструватись
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(loginAction(data)),
    register: (data) => dispatch(registerAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopAuth);
