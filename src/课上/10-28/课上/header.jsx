import React from "react";
// 3.使用数据
import context from "./context";
export default () => {
  return (
    <context.Consumer>
      {data => {
        return (
          <header>
            <button onClick={() => data.setTheme("a")}>大红色</button>
            <button onClick={() => data.setTheme("b")}>大蓝色</button>
            <button onClick={() => data.setTheme("c")}>大黄色</button>
          </header>
        );
      }}
    </context.Consumer>
  );
};
