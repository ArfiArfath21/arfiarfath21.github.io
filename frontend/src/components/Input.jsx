import React from "react";

function Input(props) {
  return (
    <div className="mb-3">
      <input
        type={props.type}
        name={props.name}
        className="form-control"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
