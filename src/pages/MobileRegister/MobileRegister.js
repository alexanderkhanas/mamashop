import React, { useState } from "react";
import s from "./MobileRegister.module.css";
import Input from "../../misc/Inputs/Input/Input";
import Button from "../../misc/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faEyeSlash,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import usePasswordToogle from "../../hooks/usePasswordToogle";
import { Formik, ErrorMessage } from "formik";
import PhoneNumberInput from "../../misc/Inputs/PhoneNumberInput/PhoneNumberInput";
import { registerAction } from "../../store/actions/profileAction";
import { connect } from "react-redux";

const MobileRegister = (register) => {
  const [isRegister, setRegister] = useState(false);
  const setFormRegister = () => setRegister(true);
  const setFormLogin = () => setRegister(false);

  const [isAgree, setIsAgree] = useState(false);
  const agreeCheckbox = ({ target: { checked } }) => {
    console.log(isAgree, checked);
    setIsAgree(checked);
  };
  return (
    <div>
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
          if (values.password != values.passwordConfirm) {
            errors.passwordConfirm = "ne spivpadae";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));
          prompt("TU Chui?");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmiting,
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
              <div className={s.body}>
                <div className={s.container}>
                  <div className={s.title}>Реєстрація</div>
                  <div className={s.login}>
                    <label className={s.label}>Ваше ім'я</label>
                    <Input />
                  </div>
                  <div className={s.ph__number}>
                    <label className={s.label}>Номер телефону</label>
                    <PhoneNumberInput />
                  </div>
                  <div className={s.email}>
                    <label className={s.label}>Електронна адреса</label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      Icon={!errors.email ? SuccessIcon : ErrorIcon}
                      name="email"
                      value={values.email}
                      type="email"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className={s.pswd}>
                    <label className={s.label}>Пароль</label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      Icon={!errors.password ? SuccessIcon : ErrorIcon}
                      name="password"
                      value={values.password}
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className={s.pswd}>
                    <label className={s.label}>Підтвердити пароль</label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      Icon={!errors.passwordConfirm ? SuccessIcon : ErrorIcon}
                      name="passwordConfirm"
                      value={values.passwordConfirm}
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <p>
                      <input
                        type="checkbox"
                        name="chexbox"
                        onChange={agreeCheckbox}
                        chacked={isAgree}
                      />
                      Погоджуюся з політикою кофіденційності
                    </p>
                  </div>
                  <Button title="Зареєструватись" disabled={!isAgree} />
                  <div className={s.logwith}>
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className={`${s.logicon} ${s.gl}`}
                    />
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className={`${s.logicon} ${s.fb} `}
                    />
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => dispatch(registerAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileRegister);
