import React from "react";

export default class Child extends React.Component {
  constructor() {
    super();
    // 在该组件里使用的所有属性都应该在这里进行一个初时化。
    // 起到的最主要的作用：给咱们开发人员看的；
    this.tiem = null;
  }
  render() {
    return (
      <div>
        <h1>我是子组件</h1>
      </div>
    );
  }
  // 性能优化
  // 组件已加载完就请求接口
  componentDidMount() {
    // 模拟一个轮询接口
    this.tiem = setInterval(() => {
      console.log("请求接口" + new Date().getTime());
    }, 1000);
  }
  // 准备卸载
  componentWillUnmount() {
    clearInterval(this.tiem);
    console.log("准备卸载");
  }
}
