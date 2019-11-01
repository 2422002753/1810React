import React from "react";

export default props => {
  return (
    <>
      <input type="text" value={props.text} onChange={props.handlechange} />
      <h1>{props.text}</h1>
    </>
  );
};
