import React from "react";

export default props => {
  return (
    <div className="inpt-top">
      <input
        type="text"
        value={props.value}
        onChange={props.setinput}
        className="inpt-ipt"
      />
      <button className="inpt-btn" onClick={props.setlist}>
        提交
      </button>
    </div>
  );
};
