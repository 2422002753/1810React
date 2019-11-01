// react 是核心库
import React from "react";
// react-dom是针对纯浏览器的支持
import ReactDOM from "react-dom";
import "./index.css";
// 做离线缓存用的
import * as serviceWorker from "./serviceWorker";
import Home from "./课上/11-01";
// 在reactDOM全局对象下有一个render渲染方法，它等同于vue挂载，render方法有两个参数，第一个参数是我们自定义的组件，第二个参数是页面上的静态根元素。
ReactDOM.render(<Home />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
