
import Submit from "./Submit";
import StartWithMaker from "./StartWithMaker";
import Divider from "./Divider";
import HideUnhide from "./HideUnhide";

export default function Signup() {
  return (
    <div className="container flex flex-col">
      <StartWithMaker />
      <Divider />
      <div className="inputs-container flex flex-col gap-4">
        <div className="input flex">
          <input type="name" placeholder="Full Name" />
        </div>
        <div className="input flex">
          <input type="email" placeholder="Enter Email" />
        </div>
        <div className="input flex">
          <input type="password" placeholder="Password" />
          <HideUnhide />
        </div>
        <div className="input flex">
          <input type="password" placeholder="Confirm Password" />
          <HideUnhide />
        </div>
      </div>
      <span className="flex justify-end text-[#D93F21] text-[14px] mt-4">
        The password must be at least 8 characters
      </span>
      <Submit name="Create Account" action={() => {console.log("Signup")}} />
    </div>
  );
}
