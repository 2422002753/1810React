import React from "react";
import context from "./context";
export default props => {
  return (
    <context.Consumer>
      {data => {
        return (
          <div style={{ color: data || "#000" }}>
            <h1>我是一个孙子组件</h1>
          </div>
        );
      }}
    </context.Consumer>
  );
};
