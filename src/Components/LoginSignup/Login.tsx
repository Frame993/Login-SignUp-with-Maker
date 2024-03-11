import WelcomeBack from "./WelcomeBack";
import Divider from "./Divider";
import Submit from "./Submit";
import HideUnhide from "./HideUnhide";

export default function Login() {
  const handleChange = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="container flex flex-col">
      <WelcomeBack />
      <Divider />
      <div className="inputs-container flex flex-col gap-8">
        <div className="input flex">
          <input type="email" placeholder="Email" onChange={handleChange} />
        </div>
        <div className="input flex">
          <input type="password" placeholder="Password" />
          <HideUnhide passwordState={() => {console.log("hide/show")}}/>
        </div>
      </div>
      <span className="flex justify-end text-[#D93F21] text-[14px] mt-4">
        Recover Password
      </span>
      <Submit
        name="Login"
        SubmitAction={() => {
          console.log("Login");
        }}
      />
    </div>
  );
}
