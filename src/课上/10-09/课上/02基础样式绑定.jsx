import React from "react";
import "./index.css";
// 组件：1.无状态组件
// 组件的声明
function Home() {
  // 组件的返回值
  // createElement方法：创建虚拟dom的，它有三个参数：第一个参数：原生dom的类型，第二个参数，是dom元素的属性，第三个参数是dom元素的内容/子元素
  // 如果在元素内需要创建多个子元素，那么第三个参数使用数组
  return [
    React.createElement(
      "p",
      { key: 1, className: "red", title: "我是一个快乐的p标签" },
      "我是div里的p标签"
    ),
    React.createElement("p", { key: 2, className: "blue" }, "我是第二个p标签")
  ];
}
/*
 React.createElement("div", {}, [
    React.createElement("p", { key: 1 }, "我是div里的p标签"),
    React.createElement("p", { key: 2 }, "我是第二个p标签")
  ]);
*/
// 导出组件
export default Home;
