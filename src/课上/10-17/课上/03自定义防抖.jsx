import React, { Component } from "react";
// cnpm  i  -S  lodash
import getBidu from "./jionp";
class Index extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: []
    };
    // 定时器
    this.time = null;
  }
  // 修改input
  handleChange = event => {
    let value = event.target.value;
    // 修改input
    this.setState({
      input: value
    });
    // 请求接口
    if (this.time) {
      clearTimeout(this.time);
    }
    // 空值不请求
    if (value === "") {
      return false;
    }
    this.time = setTimeout(() => {
      getBidu(value).then(data => {
        this.setState({
          list: data.s
        });
      });
    }, 1000);
  };
  // 渲染
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        {this.state.list.map(item => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    );
  }
}

export default Index;
