import React from "react";
import Fncom from "./components/fncom";
import "./index.css";
export default class Index extends React.Component {
  // 渲染函数
  render() {
    // React.fragment 占位组件，它不会在页面中生成任何的元素
    return (
      <React.Fragment>
        <Fncom className="red">
          <p>我是一个无状态组件</p>
          <p>我是一个无状态组件</p>
          <p>我是一个无状态组件</p>
        </Fncom>
      </React.Fragment>
    );
  }
}
