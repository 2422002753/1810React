import React from "react";

export default props => {
  return (
    <>
      <input type="text" value={props.value || ""} onChange={props.setinput} />
      <button>提交</button>
    </>
  );
};
