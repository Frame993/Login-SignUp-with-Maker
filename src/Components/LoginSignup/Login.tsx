import google_icon from "../assets/google.svg";
import facebook_icon from "../assets/facebook.svg";
import hide_password from "../assets/hide.svg";

export default function Login() {
  return (
    <div className="container flex flex-col">
      <div className="welcome flex flex-col items-center gap-4">
        <div className=" flex flex-col items-center title pb-6">
          <h2 className="text-[36px] font-semibold">Welcome Back</h2>
          <p className="text-[18px] font-regular">Login into your account</p>
        </div>
        <div className="buttons-container flex gap-4">
          <button className="flex items-center gap-2">
            <img src={google_icon} alt="google" width={20} />
            Google
          </button>
          <button className="flex items-center gap-2">
            <img src={facebook_icon} alt="facebook" />
            facebook
          </button>
        </div>
      </div>
      <div className="flex w-fufll items-center justify-between py-10">
        <svg
          width="130"
          height="1"
          viewBox="0 0 130 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0.5H130" stroke="#DBDBDB" />
        </svg>

        <p className="text-[14px]">Or continue with</p>
        <svg
          width="130"
          height="1"
          viewBox="0 0 130 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0.5H130" stroke="#DBDBDB" />
        </svg>
      </div>
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
      <button className="button-action">Log In</button>
    </div>
  );
}
