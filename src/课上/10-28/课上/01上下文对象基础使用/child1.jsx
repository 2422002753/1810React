import React from "react";
import Child2 from "./child2";
// 引入和父组件同样的上下文对象
// import context from "./context";
export default () => {
  return (
    // Consumer有一个固定的语法，该组件的内容必须是一个函数
    <div style={{ color: "#000" }}>
      <h1>我是一个子组件</h1>
      <Child2 />
    </div>
  );
};
