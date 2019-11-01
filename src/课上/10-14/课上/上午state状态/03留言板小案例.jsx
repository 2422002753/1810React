import React from "react";

export default class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      list: [
        "1111111111111111111",
        "2222222222222222222",
        "3333333333333333333"
      ]
    };
  }
  // 修改input值
  setInput = event => {
    this.setState({
      input: event.target.value
    });
  };
  // 修改list列表-向里面插入一条
  setList = () => {
    // let list = this.state.list;
    // list.push(this.state.input);
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  };
  // 渲染函数
  render() {
    return (
      <div>
        <input type="text" value={this.state.input} onChange={this.setInput} />
        <button onClick={this.setList}>提交</button>
        <ul>
          <li>当前留言条数：{this.state.list.length}条</li>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
