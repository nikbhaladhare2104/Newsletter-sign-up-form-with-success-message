import { useState } from "react";
import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      {!isSubmitted ? (
        <Form onSubmit={handleEmailChange} />
      ) : (
        <Success passEmail={email} onDismiss={() => setIsSubmitted(false)} />
      )}
    </div>
  );
}

export default App;
