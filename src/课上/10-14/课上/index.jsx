import React, { Component } from "react";
import Input from "./Input";
import List from "./list";
export default class Index extends Component {
  // 构造函数
  constructor() {
    super();
    this.state = {
      input: "",
      list: ["1231456"]
    };
  }
  // 修改input值
  setInput = event => {
    this.setState({
      input: event.target.value
    });
  };
  // 向列表里添加一条数据
  addItem = () => {
    // 逻辑：不能直接修改state
    this.setState({
      list: [...this.state.list, this.state.input]
    });
  };
  // 渲染函数
  render() {
    return (
      <>
        <Input
          value={this.state.input}
          additem={this.addItem}
          setinput={this.setInput}
        />
        <List data={"123"} />
        {/* this.state.list */}
      </>
    );
  }
}
