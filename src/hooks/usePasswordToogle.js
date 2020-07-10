import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const usePasswordToogle = () => {
  const [visible, setVisible] = useState(false);
  const Icon = ({ className }) => (
    <FontAwesomeIcon
      {...{ className }}
      icon={visible ? faEyeSlash : faEye}
      onClick={() => setVisible((visible) => !visible)}
    />
  );
  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};

export default usePasswordToogle;
