import React, { Component } from "react";
import "./index.css";
class Index extends Component {
  constructor() {
    super();
    this.state = {
      select: "3",
      radio: "1",
      textarea: "",
      checkbox: [false, true, false],
      input: ""
    };
  }
  // change
  handleChange = ({ target }) => {
    let { name, value } = target;
    // state 克隆一份
    let checkbox = "";
    if (name === "checkbox") {
      checkbox = [...this.state[name]];
      checkbox[value] = !checkbox[value];
    }
    this.setState({
      [name]: name === "checkbox" ? checkbox : value
    });
  };
  // 渲染
  render() {
    const { select, radio, textarea, checkbox, input } = this.state;
    return (
      <div>
        <form>
          <label>
            <input
              type="text"
              name="input"
              value={input}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <textarea
              name="textarea"
              value={textarea}
              onChange={this.handleChange}
              cols="30"
              rows="10"
            ></textarea>
          </label>

          <label>
            <select name="select" value={select} onChange={this.handleChange}>
              <option value="1">甜甜圈</option>
              <option value="2">呼啦圈</option>
              <option value="3">胖胖圈</option>
            </select>
          </label>

          <React.Fragment>
            {["男", "女", "未知"].map(item => {
              return (
                <label key={item}>
                  <span>{item}</span>
                  <input
                    type="radio"
                    name="radio"
                    value={item}
                    checked={radio === item}
                    onChange={this.handleChange}
                  />
                </label>
              );
            })}
          </React.Fragment>

          <React.Fragment>
            {checkbox.map((item, index) => {
              let labelname = "";
              switch (index) {
                case 0:
                  labelname = "苹果";
                  break;
                case 1:
                  labelname = "葡萄";
                  break;
                case 2:
                  labelname = "西瓜";
                  break;
                default:
                  labelname = "没有";
              }
              return (
                <label key={index}>
                  {labelname}
                  <input
                    name="checkbox"
                    type="checkbox"
                    value={index}
                    onChange={this.handleChange}
                    checked={item}
                  />
                </label>
              );
            })}
          </React.Fragment>
        </form>
      </div>
    );
  }
}

export default Index;
