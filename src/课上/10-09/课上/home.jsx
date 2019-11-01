import React from "react";
import "./index.css";
// 引入头部组件
import Header from "./childs/header";
// 引入中间区
import Main from "./childs/main";
// 引入底部
import Footer from "./childs/footer";
export default () => {
  // 在react里，凡是首写字母大写的元素/标签，它都是自定义组件
  // 凡是小写的，都是原生dom；
  let el = React.createElement;
  return el("div", { className: "wrap" }, [
    <Header key="1" />,
    <Main key="2" />,
    <Footer key="3" />
  ]);
};
