import React, { Component } from "react";
import A from "./A";
import B from "./B";
class Index extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  // 修改input
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  // 渲染
  render() {
    return (
      <div>
        <A text={this.state.text} handlechange={this.handleChange} />
        <B text={this.state.text} />
      </div>
    );
  }
}

export default Index;
