// pureComponent:基类---底层它就做了对属性和状态的浅对比，从而自动优化了性能
import React from "react";

export default class Pure extends React.PureComponent {
  render() {
    console.log("我是一个没有任何属性和状态的组件");
    return (
      <div>
        <h1>我是性能优化组件</h1>
      </div>
    );
  }
}
