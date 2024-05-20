import React, { useEffect, useState } from "react";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChange = (e) => {
    setEmail(e.target.value);

    console.log(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      props.onSubmit(email);
      setEmail("");
    } else {
      setIsValid(false);
    }
  };
  return (
    <div className="form">
      <div className="left-side">
        <h1 style={{ fontSize: "2.5rem" }}>Stay updated!</h1>
        <p className="description">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="list">
          <div>
            <img
              src="/images/icon-list.svg"
              alt="list-icon"
              className="list-icon"
            />
            <p>Product discovery and building what matters</p>
          </div>
          <div>
            <img
              src="/images/icon-list.svg"
              alt="list-icon"
              className="list-icon"
            />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div>
            <img
              src="/images/icon-list.svg"
              alt="list-icon"
              className="list-icon"
            />
            <p>And much more!</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="valid-email">
            <label htmlFor="email"> Email address </label>
            {!isValid && <p>Valid email requireed</p>}
          </div>
          <input
            type="text"
            name="email"
            id="email"
            className={`input ${!isValid && "invalid"}`}
            placeholder="email@company.com"
            onChange={handleChange}
            value={email}
          />
          <button className="btn" type="submit">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <img
        src="/images/illustration-sign-up-desktop.svg"
        alt="illustration image"
        className="right-img"
      />
    </div>
  );
};

export default Form;
