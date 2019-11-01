import React, { Component } from "react";
// 城市的数据包
const dict = [
  {
    id: 1,
    name: "北京",
    child: [{ id: 1001, name: "东城区" }, { id: 1002, name: "西城区" }]
  },
  {
    id: 2,
    name: "河北",
    child: [{ id: 20001, name: "沧州" }, { id: 20002, name: "保定" }]
  }
];
class Index extends Component {
  constructor() {
    super();
    this.state = {
      se1: 1,
      se2: 0
    };
  }
  // 修改state
  handleSelect = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  // 渲染
  render() {
    return (
      <div>
        <select name="se1" value={this.state.se1} onChange={this.handleSelect}>
          {dict.map((item, index) => {
            return (
              <option key={item.id} value={index}>
                {item.name}
              </option>
            );
          })}
        </select>
        <select name="se2" value={this.state.se2} onChange={this.handleSelect}>
          {dict[this.state.se1].child.map(item => {
            return (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Index;
