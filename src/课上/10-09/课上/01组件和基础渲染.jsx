import React from "react";

// 组件：1.无状态组件
// 组件的声明
function Home() {
  // 组件的返回值
  // createElement方法：创建虚拟dom的，它有三个参数：第一个参数：原生dom的类型，第二个参数，是dom元素的属性，第三个参数是dom元素的内容/子元素
  return React.createElement(
    "div",
    {},
    React.createElement("p", {}, "我是div里的p标签")
  );
}
// 导出组件
export default Home;
