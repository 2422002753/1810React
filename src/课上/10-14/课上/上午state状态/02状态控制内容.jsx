import React from "react";
// 使用状态并且修改状态
export default class Index extends React.Component {
  constructor() {
    super();
    // 使用状态模拟vue：v-if
    this.state = {
      is: false
    };
  }
  // 切换事件---修改state
  switch = () => {
    // 修改状态使用 this.setState
    // *state状态不能直接修改，必须使用setState来修改；
    this.setState({
      is: !this.state.is
    });
  };
  // 渲染函数
  render() {
    return (
      <div>
        <h1>{this.state.is ? "我是一个真值" : "我不是一个真值"}</h1>
        <div style={{ display: this.state.is ? "block" : "none" }}>
          我用来模拟v-show
        </div>
        <button onClick={this.switch}>切换</button>
      </div>
    );
  }
}
