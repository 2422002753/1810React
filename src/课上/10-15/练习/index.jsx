import React, { Component } from "react";
import Inpt from "./inpt";
import List from "./list";
import "./index.css";

export default class Html extends Component {
  // 构造函数
  constructor() {
    super();
    this.state = {
      input: "",
      list: ["我自横刀向天笑，去留肝胆两昆仑", "我吹得不是雪是血", "橙留香"],
      input2: ""
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
    // 添加的时候插入当前的时间
    let date = new Date();
    let tiem = date.getHours() + ":" + date.getMinutes();
    // 逻辑：不能直接修改
    this.setState({
      list: [...this.state.list, this.state.input + "。时间：" + tiem]
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
    let result = []; // 结果
    // filter如果找到一条就返回一条，这一条数据是在一个新数组里。如果一条都没有，返回一个空数组
    result = list.filter(item => {
      // 模糊搜索
      if (item.search(this.state.input2) !== -1) {
        return item;
      }
    });

    // 如果过滤器找到了，就用过滤出来的值，如果没找到，我们不能把列表清空；
    if (result.length) {
      this.setState({
        list: result
      });
    } else {
      alert("您要查询的内容没有！");
    }
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
