import React, { Component } from "react";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      bg: "",
      color: ""
    };
  }
  // 修改 state
  setStates = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // 渲染
  render() {
    return (
      <div>
        <button name="bg" value="red" onClick={this.setStates}>
          红色
        </button>
        <button name="bg" value="blue" onClick={this.setStates}>
          蓝色
        </button>
        <input
          type="color"
          name="bg"
          value={this.state.bg}
          onChange={this.setStates}
        />
        <input
          type="color"
          name="color"
          value={this.state.color}
          onChange={this.setStates}
        />
        <div style={{ background: this.state.bg }}>
          <h1 style={{ color: this.state.color }}>我是内容</h1>
        </div>
      </div>
    );
  }
}

export default Index;
