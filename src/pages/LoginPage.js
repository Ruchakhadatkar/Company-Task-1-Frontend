import React from "react";
import "./LoginPage.css";
import { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
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
        Log In
      </button>

      {showModal && (
        <div>
          <span onClick={closeModal} className="close" title="Close Modal">
            &times;
          </span>
          <form onSubmit={handleSubmit} className="modal-content">
            <div className="container">
              <h1>Log In</h1>
              <hr />

              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
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
      )}
    </div>
  );
};

export default LoginPage;
