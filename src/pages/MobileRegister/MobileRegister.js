import React, { useState } from "react";
import s from "./MobileRegister.module.css";
import Input from "../../misc/Inputs/Input/Input";
import Button from "../../misc/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import usePasswordToogle from "../../hooks/usePasswordToogle";

const MobileRegister = () => {
  const [passwordInputType, ToogleIcon] = usePasswordToogle();
  const [confirm, setConfirm] = usePasswordToogle();

  return (
    <div className={s.body}>
      <div className={s.container}>
        <div className={s.title}>Реєстрація</div>
        <div className={s.login}>
          <label className={s.label}>Ваше ім'я</label>
          <Input />
        </div>
        <div className={s.ph__number}>
          <label className={s.label}>Номер телефону</label>
          <Input />
        </div>
        <div className={s.email}>
          <label className={s.label}>Електронна адреса</label>
          <Input />
        </div>
        <div className={s.pswd}>
          <label className={s.label}>Пароль</label>
          <Input type={passwordInputType} Icon={ToogleIcon} />
        </div>
        <div className={s.pswd}>
          <label className={s.label}>Підтвердити пароль</label>
          <Input type={confirm} Icon={setConfirm} />
        </div>
        <div>
          <p>
            <input type="checkbox" />
            Погоджуюся з політикою кофіденційності
          </p>
        </div>
        <Button title="Зареєструватись" />
        <div className={s.logwith}>
          <FontAwesomeIcon icon={faGoogle} className={`${s.icon} ${s.gl}`} />
          <FontAwesomeIcon icon={faFacebook} className={`${s.icon} ${s.fb} `} />
        </div>
      </div>
    </div>
  );
};

export default MobileRegister;
