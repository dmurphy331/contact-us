import React from "react";

export const LabelledInputTextType = "text";
export const LabelledInputSubmitType = "submit";
export const LabelledInputEmailType = "email";

function LabelledInput({
  type = LabelledInputTextType,
  label = false,
  name,
  handleInputChange,
}) {
  const handleChange = (event) => {
    handleInputChange(event.target.name, event.target.value);
  };
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      {type === "submit" ? (
        <input type={type} />
      ) : (
        <input name={name} type={type} onChange={handleChange} />
      )}
    </>
  );
}

export default LabelledInput;
