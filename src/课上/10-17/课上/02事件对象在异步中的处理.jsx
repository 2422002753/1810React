import React, { Component } from "react";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  // 异步中的event表现和处理办法
  handleCLick = event => {
    // event.persist()强制去除合并事件，保留属性值
    event.persist();
    let value = event.target.value;
    // 切记：event对象只要是在异步的方法里，就会丢失属性值;
    setTimeout(() => {
      this.setState({
        input: value
      });
    }, 100);
  };
  // 渲染
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleCLick}
        />
      </div>
    );
  }
}

export default Index;
