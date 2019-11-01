import React from "react";
// 引入axios
import axios from "axios";
export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: []
    };
  }
  // 点击事件： handle === 处理
  handleClick = () => {
    // 定义一个接收jsonp返回的函数
    window.baidu = {
      sug: data => {
        // 设置state
        this.setState({
          list: data.s
        });
      }
    };
    axios
      .get("api", {
        params: {
          wd: this.state.input
        }
      })
      .then(data => {
        // 当接口请求成功后，获取我们的返回值
        if (data.status === 200) {
          // eval:将字符串的js代码变成真实的可执行的js代码；
          eval(data.data);
        }
      });
  };
  // change事件
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>搜索</button>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
