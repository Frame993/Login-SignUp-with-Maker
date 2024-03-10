import google_icon from "../assets/google.svg";
import facebook_icon from "../assets/facebook.svg";

export default function WelcomeBack() {
  return (
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
  );
}
