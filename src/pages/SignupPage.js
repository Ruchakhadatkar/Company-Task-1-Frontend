import React from "react";
import "./SignupPage.css";
import { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import validator from "validator";

export const Signuppage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNum, setContactNum] = useState("+91");
  const indianPhoneNumberRegex = /^\+(91)[0-9]{10}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      toast.error("Email is invalid");
      return;
    }
    if (!validator.isStrongPassword(password)) {
      toast.error("Password is not strong enough");
      return;
    }
    if (!indianPhoneNumberRegex.test(contactNum)) {
      toast.error("Invalid Contact number");
      return;
    }

    navigate("/home");
    toast.success("Account create successfully!");
  };

  return (
    <div>
      <div className="main-form-signup">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="modal-content"
        >
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input type="text" placeholder="Enter Name" name="name" required />

            <label htmlFor="contact">
              <b>Contact</b>
            </label>
            <input
              onChange={(e) => {
                setContactNum(e.target.value);
              }}
              type="text"
              placeholder="Enter contact number"
              name="contact"
              value={contactNum}
              required
            />

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

            <label htmlFor="dob">
              <b>Date of Birth</b>
            </label>
            <input type="date" placeholder="Enter DOB" name="dob" required />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <label>
              <input
                type="checkbox"
                defaultChecked
                name="remember"
                style={{ marginBottom: "10px" }}
              />{" "}
              Remember me
            </label>

            <p>
              By creating an account you agree to our{" "}
              <a href="#" style={{ color: "#385898" }}>
                Terms & Privacy
              </a>
              .
            </p>

            <div className="clearfix">
              <button
                type="button"
                // onClick={closeModal}
                className="cancelbtn"
              >
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
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
