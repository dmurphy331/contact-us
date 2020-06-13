import React from "react";

export const LabelledTextAreaCols = "50";
export const LabelledTextAreaRows = "4";

function LabelledTextArea({
  label = false,
  rows = LabelledTextAreaRows,
  cols = LabelledTextAreaCols,
  name,
  handleInputChange,
}) {
  const handleChange = (event) => {
    handleInputChange(event.target.name, event.target.value);
  };
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea rows={rows} cols={cols} name={name} onChange={handleChange} />
    </>
  );
}

export default LabelledTextArea;
