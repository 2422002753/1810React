// 快速生成class组件的 -- rcc
import React, { Component } from "react";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      name: "宋宇"
    };
    // 1.解决es6方式声明的函数指针绑定问题
    // this.handleClick01 = this.handleClick01.bind(this);
  }
  // handleClick:箭头函数自动绑定this
  handleClick = () => {
    // *优先使用的函数声明方式；
    // 它的好处在于，我们的this指向是当前环境的对象
    // 为什么？箭头函数自身没有this,它会逐级向上找this，找到后就拿过来。
    console.log(this);
  };
  // 常规的class内部的方法
  handleClick01() {
    // 这种es6式的函数声明方法，在class内部会丢失this
    console.log(this.state.name);
  }
  // 渲染
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick01}>点击我</button>
        <button onClick={this.handleClick01.bind(this)}>点击我</button>
      </div>
    );
  }
}

export default Index;
