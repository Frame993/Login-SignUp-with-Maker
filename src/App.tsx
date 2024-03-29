import { useState } from "react";
import Login from "./Components/LoginSignup/Login";
import Signup from "./Components/LoginSignup/Signup";
export default function App() {
  const [action, setAction] = useState("Signup");

  const handleClick = () => {
    setAction(action === "Login" ? "Signup" : "Login");
  };

  return (
    <>
      {action === "Signup" ? <Login /> : <Signup />}
      <div className="text-center py-8">
        <p>
          Don’t have an account?{" "}
          <span
            onClick={handleClick}
            className="text-[#20dc49] font-medium cursor-pointer"
          >
            {action}
          </span>
        </p>
      </div>
    </>
  );
}
