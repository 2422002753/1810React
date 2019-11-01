// 强制更新和性能优化组件
import React from "react";

export default class Index extends React.Component {
  // 渲染
  render() {
    console.log("被更新了");
    return (
      <div>
        <h1>我是被强制更新的组件</h1>
      </div>
    );
  }
}
