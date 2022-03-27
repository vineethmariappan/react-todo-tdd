import React, { useState } from "react";
var allProps;



function Form(props) {
  allProps = props;
  function handleSubmit(e){
    e.preventDefault();
    allProps.addTask(name);
    setName("");
  }
  const [name, setName] = useState('');
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <form data-testid="TodoInputForm" onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label data-testid="inputLabel" htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        data-testid="todoInputField"
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button data-testid="addButton" type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
