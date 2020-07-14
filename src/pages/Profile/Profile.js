import React from "react";
import s from "./Profile.module.css";
import BreadCrumbs from "../../misc/BreadCrumbs/BreadCrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Input from "../../misc/Inputs/Input/Input";
import Button from "../../misc/Buttons/Button";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import CardWrapper from "../../wrappers/CardWrapper/CardWrapper";

const Profile = (props) => {
  const breadCrumbsItems = [
    {
      name: "Головна",
      path: "/",
      icon: <FontAwesomeIcon icon={faHome} className={s.icon} />,
    },
    { name: "Особистий кабінет", path: "/profile" },
  ];

  console.log(props);

  return (
    <MainWrapper>
      <BreadCrumbs items={breadCrumbsItems} />
      <h1>Особистий кабінет</h1>
      <CardWrapper maxWidth="600px" className={s.card__container}>
        <h3>Особиста інформація</h3>
        <Input label="Повне ім'я" placeholder="Іванов Іван" />
        <Input label="Електронна пошта" placeholder="ivan@gmail.com" />
        <Input label="Прізвище" placeholder="••••••••" />
      </CardWrapper>
      <CardWrapper maxWidth="600px" className={s.card__container}>
        <h3>Відстеження замовлення</h3>
        <Input label="Повне ім'я" placeholder="Іванов Іван" />
        <div className={s.button__container}>
          <Button style={{ textTransform: "capitalize" }} title="Відстежити" />
        </div>
      </CardWrapper>
    </MainWrapper>
  );
};

export default Profile;
