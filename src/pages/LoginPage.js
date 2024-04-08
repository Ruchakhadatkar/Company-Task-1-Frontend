import React from "react";
import "./LoginPage.css";
import { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      toast.error("Email is invalid");
      return;
    }
    navigate("/home");
    toast.success("Login successfully!");
  };
  return (
    <div>
      <div className="main-form">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="modal-content-login"
        >
          <div className="container">
            <h1>Log In</h1>
            <hr />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <div className="clearfix">
              {/* <button
                  type="button"
                  onClick={closeModal}
                  className="cancelbtn"
                >
                </button> */}
              <button type="submit" className="loginpbtn">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
