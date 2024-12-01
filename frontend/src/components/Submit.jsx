import React from "react";

function Submit(props) {
  return (
    <div className="mb-3">
      <button type="submit" className="form-button btn btn-primary col-12">
        {props.text}
      </button>
    </div>
  );
}

export default Submit;
