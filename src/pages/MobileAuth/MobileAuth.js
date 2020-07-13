import React, { useState } from "react";
import s from "./MobileAuth.module.css";
import Input from "../../misc/Inputs/Input/Input";
import Button from "../../misc/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faKey, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import usePasswordToogle from "../../hooks/usePasswordToogle";

const MobileAuth = () => {
  const [passwordInputType, ToogleIcon] = usePasswordToogle();

  return (
    <div className={s.body}>
      <div className={s.container}>
        <h4 className={s.title}>Авторизація</h4>
        <div className={s.email}>
          <label className={s.label}>Ваш логін/e-mail</label>
          <Input />
        </div>
        <div className={s.pswd}>
          <label className={s.label}>Ваш пароль</label>
          <Input type={passwordInputType} Icon={ToogleIcon} />
        </div>
        <Button title="Увійти" />
        <div className={s.fbt}>
          <button className={s.restore}>Відновити акаунт</button>
          <button className={s.reg}>
            Зареєструватись
            <FontAwesomeIcon icon={faKey} className={s.faKey} />
          </button>
        </div>
        <div className={s.logwith}>
          <FontAwesomeIcon icon={faGoogle} className={`${s.icon} ${s.gl}`} />
          <FontAwesomeIcon icon={faFacebook} className={`${s.icon} ${s.fb} `} />
        </div>
      </div>
    </div>
  );
};

export default MobileAuth;
