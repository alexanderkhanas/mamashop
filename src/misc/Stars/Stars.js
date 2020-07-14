import React from "react";
import s from "./Stars.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const Stars = ({ containerClass, value, isStatic = true, setValue }) => {
  return (
    <div className={`${s.container} ${containerClass}`}>
      {[1, 2, 3, 4, 5].map((item, i) => {
        const isActive = i <= value;
        return (
          <FontAwesomeIcon
            key={i}
            onClick={!isStatic ? () => setValue(i) : () => {}}
            icon={isActive ? faStar : farStar}
            className={
              isActive
                ? `${s.star__icon} ${s.star__icon__active}`
                : s.star__icon
            }
          />
        );
      })}
    </div>
  );
};

export default Stars;
