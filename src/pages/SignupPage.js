import React from "react";
import "./SignupPage.css";
import { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";

const Signuppage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal(); // Close modal after form submission
    navigate("/");
  };

  return (
    <div>
      <button onClick={openModal} style={{ width: "auto" }}>
        Sign Up
      </button>

      {showModal && (
        <div>
          <span onClick={closeModal} className="close" title="Close Modal">
            &times;
          </span>
          <form onSubmit={handleSubmit} className="modal-content">
            <div className="container">
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr />

              <label htmlFor="name">
                <b>Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                required
              />

              <label htmlFor="contact">
                <b>Contact</b>
              </label>
              <input
                type="number"
                placeholder="Enter contact number"
                name="contact"
                required
              />

              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              />

              {/* <label htmlFor="city">
                <b>city</b>
              </label>
              <input
                type="text"
                placeholder="Enter city"
                name="city"
                required
              /> */}

              <label htmlFor="dob">
                <b>Date of Birth</b>
              </label>
              <input type="date" placeholder="Enter DOB" name="dob" required />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
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
                  onClick={closeModal}
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
      )}
    </div>
  );
};

export default Signuppage;
