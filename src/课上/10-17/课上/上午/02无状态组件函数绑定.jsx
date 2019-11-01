// calss === rcc
import React from "react";
// 在无状态组件中，使用函数，需要注意的是，必须要声明；
// 在无状态组件中可以声明函数；
export default () => {
  let handleClick = () => {
    alert("我是一个函数");
  };
  return (
    <div>
      <button onClick={handleClick}>点击我</button>
    </div>
  );
};
