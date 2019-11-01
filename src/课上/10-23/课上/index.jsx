import React, { Component } from "react";
import "./index.css";
import axios from "axios";
let formData = {
  username: "", // input
  age: "", // input
  sex: "男", // radio
  live: [{ name: "打篮球", state: false }, { name: "唱歌", state: false }], // checkbox
  job: "前端架构", // select
  plan: "" // textaera
};
class Index extends Component {
  constructor() {
    super();
    this.state = formData;
  }
  // 改变状态
  handleChange = ({ target }) => {
    let { name, value } = target;
    let live = "";
    if (name === "live") {
      live = [...this.state.live];
      live[value].state = !live[value].state;
    }
    // 修改值
    this.setState({
      [name]: name === "live" ? live : value
    });
  };
  // 重置表单
  resetForm = () => {
    this.setState(formData);
  };
  // 渲染
  render() {
    const { username, age, sex, live, job, plan } = this.state;
    return (
      <div>
        <form onReset={this.resetForm}>
          <label>
            <span>用户名：</span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <span>年龄：</span>
            <input
              type="text"
              name="age"
              value={age}
              onChange={this.handleChange}
            />
          </label>

          <React.Fragment>
            <label>
              <span>男</span>
              <input
                type="radio"
                name="sex"
                checked={sex === "男"}
                onChange={this.handleChange}
                value="男"
              />
            </label>
            <label>
              <span>女</span>
              <input
                type="radio"
                name="sex"
                onChange={this.handleChange}
                checked={sex === "女"}
                value="女"
              />
            </label>
          </React.Fragment>

          {live.map((item, index) => {
            return (
              <label key={item.name}>
                <span>{item.name}</span>
                <input
                  type="checkbox"
                  name="live"
                  onChange={this.handleChange}
                  value={index}
                  checked={item.state}
                />
              </label>
            );
          })}

          <label>
            <span>工作：</span>
            <select name="job" value={job} onChange={this.handleChange}>
              <option value="前端架构">前端架构</option>
              <option value="全栈架构">全栈架构</option>
              <option value="后端架构">后端架构</option>
            </select>
          </label>

          <label>
            <span>计划：</span>
            <textarea
              name="plan"
              value={plan}
              onChange={this.handleChange}
            ></textarea>
          </label>

          <button type="button" onClick={this.onSubmit}>
            提交
          </button>
          <button type="reset">重置</button>
        </form>
      </div>
    );
  }
  // 提交事件
  onSubmit = () => {
    axios
      .get("http://localhost:3003/form", {
        params: this.state
      })
      .then(res => {
        console.log(res);
      });
  };
  // 自动请求
  componentDidMount() {
    axios.get("http://localhost:3003/getForm").then(res => {
      this.setState(res.data);
      console.log(res.data);
    });
  }
}

export default Index;
