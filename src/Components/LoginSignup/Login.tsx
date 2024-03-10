
import WelcomeBack from "./WelcomeBack";
import Divider from "./Divider";
import Submit from "./Submit";

import hide_password from "../assets/hide.svg";

export default function Login() {
  return (
    <div className="container flex flex-col">
      <WelcomeBack />
      <Divider />
      <div className="inputs-container flex flex-col gap-8">
        <div className="input flex">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input flex">
          <input type="password" placeholder="Password" />
          <img src={hide_password} alt="hide" onClick={() => {}} />
        </div>
      </div>
      <span className="flex justify-end text-[#D93F21] text-[14px] mb-10 mt-4">
        Recover Password
      </span>
      <Submit action={() => {console.log("Login")}}/>
    </div>
  );
}
