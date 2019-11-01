import React, { Component } from "react";
import A from "./A";
import B from "./B";
import Header from "./header";
// 主题数据包
const themes = {
  red: "red",
  blue: "blue",
  yellow: "yellow"
};

class Index extends Component {
  constructor() {
    super();
    this.state = {
      theme: window.localStorage.getItem("theme") || "red"
    };
  }
  // 修改input
  handleClick = theme => {
    // 本地存储
    window.localStorage.setItem("theme", theme);
    this.setState({
      theme
    });
  };
  // 渲染
  render() {
    return (
      <div>
        <Header settheme={this.handleClick} />
        <A theme={themes[this.state.theme]} />
        <B theme={themes[this.state.theme]} />
      </div>
    );
  }
}

export default Index;
