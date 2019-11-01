import React, { Component } from "react";
// 百分百非受控组件： <input type="file" />
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
    this.setState({
      [name]: value
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

          <label>
            <input
              type="radio"
              name="radio"
              value="1"
              checked={radio === "1"}
              onChange={this.handleChange}
            />
            <input
              type="radio"
              name="radio"
              value="2"
              checked={radio === "2"}
              onChange={this.handleChange}
            />
            <input
              type="radio"
              name="radio"
              value="3"
              checked={radio === "3"}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Index;
