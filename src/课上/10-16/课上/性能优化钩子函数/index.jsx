import React from "react";
import Child from "./child";
export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "阿强",
      name1: "我也叫阿强",
      name2: "我还叫阿强"
    };
  }
  // 修改name
  hadleChange = event => {
    var name = event.target.value;
    this.setState({
      name: name
    });
  };
  hadleChange1 = event => {
    var name = event.target.value;
    this.setState({
      name1: name
    });
  };
  hadleChange2 = event => {
    var name = event.target.value;
    this.setState({
      name2: name
    });
  };
  // 渲染
  render() {
    return (
      <div>
        <Child name={this.state.name} />
        <input
          type="text"
          value={this.state.name}
          onChange={this.hadleChange}
        />
        <input
          type="text"
          value={this.state.name1}
          onChange={this.hadleChange1}
        />
        <input
          type="text"
          value={this.state.name2}
          onChange={this.hadleChange2}
        />
        {this.state.name1}
        <br />
        {this.state.name2}
      </div>
    );
  }
}
