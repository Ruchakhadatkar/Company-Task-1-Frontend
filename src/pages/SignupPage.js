import React from "react";
import "./SignupPage.css";
import { useState } from "react";

const Signuppage = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    console.log("Closing modal");
    setShowModal(false);
  };

  // Function to handle opening modal
  const openModal = () => {
    console.log("Opening modal");
    setShowModal(true);
  };

  // Function to handle form submission (submit action not implemented)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // Add form submission logic here
    closeModal(); // Close modal after form submission (replace this with your logic)
  };

  return (
    <div>
      <button onClick={openModal} style={{ width: "auto" }}>
        Sign Up
      </button>

      {showModal && (
        <div >
          <span onClick={closeModal} className="close" title="Close Modal">
            &times;
          </span>
          <form onSubmit={handleSubmit} className="modal-content" >
            <div className="container">
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
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

              <label htmlFor="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                required
              />

              <label>
                <input
                  type="checkbox"
                  defaultChecked
                  name="remember"
                  style={{ marginBottom: "15px" }}
                />{" "}
                Remember me
              </label>

              <p>
                By creating an account you agree to our{" "}
                <a href="#" style={{ color: "dodgerblue" }}>
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
