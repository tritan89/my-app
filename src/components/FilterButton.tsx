import React from "react";
type setFiltertype = (name: string) => void;

type FilterProps = {
  key: string;
  name: string;
  isPressed: boolean;
  setFilter: setFiltertype;
};
function FilterButton(props: FilterProps) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
