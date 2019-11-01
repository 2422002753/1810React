import React, { Component } from "react";
import Inpt from "./inpt";
import List from "./list";
import "./index.css";

export default class Html extends Component {
  // 构造函数
  constructor() {
    super();
    this.state = {
      input: "请输入留言信息",
      list: ["我自横刀向天笑，去留肝胆两昆仑", "我吹得不是雪是血", "橙留香"],
      input2: "要查询的内容"
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
    // 逻辑：不能直接修改
    this.setState({
      list: [...this.state.list, this.state.input]
    });
  };

  // 删除当前的li
  deleteItem = index => {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  };

  // 清空留言板
  deleteAll = () => {
    this.setState({
      list: []
    });
  };

  // 修改input2值
  setInput2 = event => {
    this.setState({
      input2: event.target.value
    });
  };

  // 查询数组中是否有这个值
  indexOf = () => {
    let list = [...this.state.list];
    list.indexOf(this.state.input2);
    // console.log(this.state.input2);
    // console.log(list.indexOf(this.state.input2));
    // console.log(list);
    this.setState({
      list: [...list]
    });
  };

  // 渲染函数
  render() {
    return (
      <div className="html">
        <Inpt
          value={this.state.input}
          setinput={this.setInput}
          setlist={this.addItem}
        />
        <List
          data={this.state.list}
          deleteItem={this.deleteItem}
          deleteall={this.deleteAll}
          indexof={this.indexOf}
          value={this.state.input2}
          input2={this.setInput2}
        />
      </div>
    );
  }
}
