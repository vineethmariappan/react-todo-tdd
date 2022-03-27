import React from "react";

function FilterButton(props) {
  return (
    <button data-testid="filterButton" type="button" className="btn toggle-btn" aria-pressed={props.isPressed} 
    onClick={()=>props.setFilter(props.name)}>
      <span data-testid="filterSpan" dta className="visually-hidden">Show </span>
      <span data-testid="filterSpan">{props.name} </span>
      <span data-testid="filterSpan" className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
