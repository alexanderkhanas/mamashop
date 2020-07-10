import React, { useState } from "react";
import s from "./Register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Formik } from "formik";

const Register = (props) => {
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
              <h1>Create Account</h1>
              <div className={`${s["social-container"]}`}>
                <FontAwesomeIcon icon={faGoogle} className={s.brand__icon} />
                <FontAwesomeIcon icon={faFacebook} className={s.brand__icon} />
                {/* <a href="#" className={s.social}>
                  <i className={`${} ${s["fa-facebook-f"]}`"fab "} />
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in" />
                </a> */}
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className={`${s["form-container"]} ${s["sign-in-container"]}`}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                console.log(values);
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
                return (
                  <form action="#">
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
                    <input
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="password"
                      placeholder="Password"
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
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button onClick={setFormLogin} className={s.ghost} id="signIn">
                  Sign In
                </button>
              </div>
              <div className={`${s["overlay-panel"]} ${s["overlay-right"]}`}>
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button onClick={setFormRegister} className="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
