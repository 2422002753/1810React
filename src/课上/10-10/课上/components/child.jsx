import React from "react";

export default props => {
  return <div>{props.children + 1}我是一个动态的子元素</div>;
};
