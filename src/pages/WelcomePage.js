import React, { useState } from "react";
import backgroundImg from "../Assets/backgrounImgPizza.jpg";
import { Signuppage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import './WelcomePage.css'

const WelcomePage = () => {
  const [isShow, setIsShow] = useState(null);

  return (
    <div className="imgContainer">
      <div className="forms-modal ">
        {isShow ? <Signuppage /> : isShow == null ? <></> : <LoginPage />}
        <div
          className="btnContainer d-flex justify-content-center gap-3"
          style={{ padding: "22rem 0px" }}
        >
          <a
            className=" main-signup-btn btn btn-primary btn-lg mr-2 "
            href="#"
            role="button"
            onClick={() => {
              setIsShow(true);
            }}
            style={{ width: "10rem", fontWeight: "600" }}
          >
            Sign Up
          </a>
          <a
            className="main-login-btn btn btn-primary btn-lg"
            href="#"
            role="button"
            onClick={() => {
              setIsShow(false);
            }}
            style={{ width: "10rem", fontWeight: "600" }}
          >
            Log In
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default WelcomePage;
