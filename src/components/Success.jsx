import React from "react";

const Success = (props) => {
  return (
    <div className="success">
      <img
        src="/images/icon-success.svg"
        alt="success-icon"
        className="success-icon"
      />
      <h1> Thanks for subscribing!</h1>
      <p className="confirm">
        A confirmation email has been sent to{" "}
        <span style={{ fontWeight: "bold" }}>{props.passEmail}</span>. Please
        open it and click the button inside to confirm your subscription.
      </p>
      <button onClick={props.onDismiss}>Dismiss message</button>
    </div>
  );
};

export default Success;
