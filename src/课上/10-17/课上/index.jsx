import React, { Component } from "react";
import getBidu from "./jionp";
// 引入lodash
import _ from "lodash";
class Index extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: []
    };
    //1.声明一个防抖函数
    this.handleDebounce = _.debounce(this.handleDebounce, 1000);
  }
  // 修改input
  handleChange = event => {
    let value = event.target.value;
    // 修改input
    this.setState({
      input: value
    });
    // 3.使用请求接口
    this.handleDebounce(value);
  };
  // 2.请求接口函数的逻辑
  handleDebounce = value => {
    getBidu(value).then(data => {
      this.setState({
        list: data.s
      });
    });
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
