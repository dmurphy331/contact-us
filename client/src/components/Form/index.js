import React, { useState } from "react";
import "./Form.css";

function Form({ children }) {
  const [fieldValues, setFieldValues] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (name, value) => {
    setFieldValues({
      ...fieldValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch("http://localhost:8080/create", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fieldValues),
    }).then((res) => setSubmitted(true));
  };

  return (
    <>
      {submitted && <h2>Thanks for your submission.</h2>}
      {!submitted && (
        <form className="Form" onSubmit={handleSubmit}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { handleInputChange })
          )}
        </form>
      )}
    </>
  );
}

export default Form;
