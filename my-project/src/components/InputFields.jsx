import React from "react";

import  "../App.css";

function InputFields(props) {
  return (
    <div className='container'>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputFields;