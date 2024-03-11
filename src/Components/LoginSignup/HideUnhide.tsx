import { useState } from "react";

import hide_password from "../assets/hide.svg";
import show_password from "../assets/show.svg";

interface Props {
  passwordState: () => void;
}

export default function HideUnhide({passwordState}: Props) {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!visible);
    passwordState();
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {visible ? (
        <img src={hide_password} alt="hide" />
      ) : (
        <img src={show_password} alt="show" />
      )}
    </div>
  );
}
