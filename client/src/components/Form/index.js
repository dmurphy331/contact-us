import React from 'react'

function Form({ children }) {

  const handleSubmit = (event) => {
    console.log(children);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default Form;