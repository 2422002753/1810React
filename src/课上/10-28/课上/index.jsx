import React, { Component } from "react";
// 2.在根组件中使用上下文对象，创建数据提供
import context from "./context";
import Header from "./header";
import Main from "./main";
class Index extends Component {
  constructor() {
    super();
    this.state = {
      theme: "a"
    };
    // 真正的主题包
    this.themes = {
      a: "red",
      b: "blue",
      c: "yellow"
    };
  }
  // 修改的方法
  setTheme = theme => {
    this.setState({
      theme
    });
  };
  // 渲染
  render() {
    return (
      <div>
        <h1>主题控制</h1>
        <context.Provider
          value={{
            theme: this.themes[this.state.theme],
            setTheme: this.setTheme
          }}
        >
          <Header />
          <Main />
        </context.Provider>
      </div>
    );
  }
}

export default Index;
