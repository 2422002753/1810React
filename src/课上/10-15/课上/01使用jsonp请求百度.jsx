import React from "react";
// cnpm i -S  axios
// cnpm i -S  jsonp
import getBaidu from "./api";
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
    getBaidu("react", data => {
      console.log(data.s);
    });
  };
  // change事件
  handleChange = event => {
    // 修改input---异步修改
    // this.setState({
    //   input: event.target.value
    // });

    // react里state修改是异的，所以在修改后立即获取是拿不到修改后的值的；
    // 如何解决这种问题---》setState另外一种写法
    // 同步的修改
    event.persist(); // 去除合成事件，强制保留event对象的属性值；
    this.setState(
      () => {
        return {
          input: event.target.value
        };
      },
      () => {
        // 请求接口并赋值给list
        console.log(this.state.input);
        getBaidu(this.state.input, data => {
          this.setState({
            list: data.s
          });
        });
      }
    );
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
