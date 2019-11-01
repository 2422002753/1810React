// 高阶组件定义：它是为了复用逻辑；
// 当有多个组件都是同样得逻辑功能得时候，就需要使用高阶组件；
// 语法：一个函数 接收一个组件  返回一个class组件 class组件内部使用接收得组件

import React from "react";
// 引入高阶组件
import hoc from "./hoc";

export default class Index extends React.Component {
  constructor() {
    super();
    // 高阶组件必须在construtor中实例化
    this.Hoc = hoc(() => {
      return <div>我是一个高阶组件</div>;
    });
  }
  render() {
    return (
      <div>
        <this.Hoc />
      </div>
    );
  }
}
