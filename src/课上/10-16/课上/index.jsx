// 强制更新和性能优化组件
import React from "react";
import Child from "./child";
import Pure from "./prue";
export default class Index extends React.Component {
  myForceUpdate = () => {
    // 强制更新
    this.forceUpdate();
  };
  constructor() {
    super();
    this.state = {
      is: false
    };
  }
  // 修改状态的
  handleClick = () => {
    this.setState({
      is: !this.state.is
    });
  };
  // 渲染
  render() {
    return (
      <div>
        <Child />
        <Pure />
        <button onClick={this.myForceUpdate}>强制修改</button>
        <button onClick={this.handleClick}>修改状态</button>
      </div>
    );
  }
}
