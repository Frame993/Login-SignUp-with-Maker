import google_icon from "../assets/google.svg";
import facebook_icon from "../assets/facebook.svg";

export default function StartWithMaker() {
  return (
    <div className="welcome flex flex-col items-center gap-4">
      <div className=" flex flex-col items-center title pb-6">
        <h2 className="text-[24px] font-semibold">Get Started With MAKER</h2>
        <p className="text-[15px] text-[#5A5A5A] font-regular">Getting started is easy</p>
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
  )
}
