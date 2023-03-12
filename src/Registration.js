import React, { useState } from "react";
import validator from "validator";

function Registration() {

//initilize states and error messages for all fields

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

//password regex from google
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{7,}$/;

  //event binding on user input
  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "name":
        setName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();


    setEmailError("");
    setNameError("");
    setPasswordError("");
    setConfirmPasswordError("");

//validate fields
    let isValid = true;


    if (!email || !validator.isEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    if (!name) {
      setNameError("Please enter your name.");
      isValid = false;
    }

  
    if (!password || !passwordRegex.test(password)) {
      setPasswordError(
        "Password should be at least 7 characters with 1 capital letter, one number, and one special character."
      );
      isValid = false;
    }


    if (!confirmPassword || confirmPassword !== password) {
      setConfirmPasswordError(" Confirm the password should match the password.");
      isValid = false;
    }


    if (isValid) {

      alert("Information passes the requirements.");
    }
  };


  return (
    <div className="container">
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          {nameError && <p className="error">{nameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
          {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
      <h2>Registration Page: 
            This page consists of 4 inputs: Email, Name, Password and Password Confirmation.<br/>
            1. All fields should be filled prior to submitting the form <br/>
            2. Only valid emails are accepted.<br/>
            3. Password should be at least 7 characters with 1 capital letter, one number, and one 
            special character.<br/>
            4. Confirm the password should match the password.</h2>
    </div>
    
  );
}

export default Registration;