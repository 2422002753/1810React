import React, { Component } from "react";
const se = [
  { name: "北京", arr: [{ name: "东城" }, { name: "西城" }] },
  { name: "上海", arr: [{ name: "黄埔" }, { name: "明珠" }] }
];
class Index extends Component {
  constructor() {
    super();
    this.state = {
      se1: "北京",
      se2: "",
      color: ""
    };
  }
  change = ({ target }) => {
    console.log(target.value);
    this.setState({
      [target.name]: target.value
    });
  };
  render() {
    return (
      <div>
        <input
          type="color"
          name="color"
          value={this.state.color}
          onChange={this.change}
        />
        <select name="se1" value={this.state.se1} onChange={this.change}>
          {se.map(item => {
            return (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
        <select name="se2" value={this.state.se2} onChange={this.change}>
          {se
            .find(item => item.name === this.state.se1)
            .arr.map(item => {
              return (
                <option key={item.name} value={item.name}>
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
