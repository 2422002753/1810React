import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from "./main";
// 子组件
const Child = () => {
  return (
    <div>
      <h1>我是一个旋覆层</h1>
    </div>
  );
};
// * ReactDOM.createPortal()只能写在render里才会生效；
class Index extends Component {
  constructor() {
    super();
    this.state = {
      el: null
    };
  }
  render() {
    return (
      <div className="box" style={{ overflow: "hidden", color: "red" }}>
        <h2>我是一个容器</h2>
        <Main />
        {this.state.el &&
          ReactDOM.createPortal(<Child />, document.getElementById("main"))}
      </div>
    );
  }
  // 挂载完成
  componentDidMount() {
    this.setState({
      el: document.getElementById("main")
    });
  }
}

export default Index;
