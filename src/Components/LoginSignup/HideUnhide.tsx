import { useState } from "react";

import hide_password from "../assets/hide.svg";
import show_password from "../assets/show.svg";



export default function HideUnhide() {

   const[visible, setVisible] = useState(true);

   const handleClick = () => {
    setVisible(!visible);
   }
    
  return (
    <div onClick={handleClick} className="cursor-pointer">
      {visible ? <img src={hide_password} alt="hide" /> : <img src={show_password} alt="show" />}
    </div>
  );
}
