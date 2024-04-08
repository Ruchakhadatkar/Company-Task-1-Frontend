import React, { useState } from "react";
import backgroundImg from "../Assets/backgrounImgPizza.jpg";
import { Signuppage } from "./SignupPage";
import { LoginPage } from "./LoginPage";

const WelcomePage = () => {
  const [isShow, setIsShow] = useState(null);

  return (
    <div className="imgContainer">
      <div className="forms-modal">
        {isShow ? <Signuppage /> : isShow == null ? <></> : <LoginPage />}
        <button
          onClick={() => {
            setIsShow(true);
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            setIsShow(false);
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
