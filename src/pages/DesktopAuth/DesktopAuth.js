import React, { useState } from "react";
import s from "./DesktopAuth.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Formik, ErrorMessage } from "formik";
import Input from "../../misc/Inputs/Input/Input";
import {
  faCheck,
  faCheckCircle,
  faExclamation,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const DesktopAuth = (props) => {
  const [isRegister, setRegister] = useState(false);
  const setFormRegister = () => setRegister(true);
  const setFormLogin = () => setRegister(false);
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
            <form action="#">
              <h1>Створити акаунт</h1>
              <div className={`${s["social-container"]}`}>
                <FontAwesomeIcon icon={faGoogle} className={s.brand__icon} />
                <FontAwesomeIcon icon={faFacebook} className={s.brand__icon} />
              </div>
              <span>або використайте електронну пошту для реєстрації</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Зареєструватись</button>
            </form>
          </div>
          <div className={`${s["form-container"]} ${s["sign-in-container"]}`}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (values.password.length <= 5) {
                  errors.password = "Занадто короткий пароль";
                }
                if (!values.email) {
                  errors.email = "Введіть електронну пошту";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Невірно введена електронна пошта";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values));
                prompt("TY PISYA?");
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
              }) => {
                console.log("values :", values);

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
                  <form onSubmit={handleSubmit}>
                    <h1>Увійдіть, щоб робити покупки</h1>
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
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      Icon={!errors.email ? SuccessIcon : ErrorIcon}
                      name="email"
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
                      type="password"
                      placeholder="••••••••"
                    />
                    <a href="#">Забули пароль?</a>
                    <button>Увійти</button>
                  </form>
                );
              }}
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

export default DesktopAuth;
