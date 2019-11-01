import React, { Component } from "react";
import "./index.css";
import { login } from "../课上/vif";
import { login as reqLogin } from "./api";

/*      表单常用元素
          <input type="text" />
          <select name="" id=""></select>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button></button>
          <input type="password" />
          <input type="checkbox" />
          <input type="radio" />
    */
class Index extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  // 改变input值
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // 提交验证
  handleSubmit = () => {
    let state = login(this.state);
    if (state) {
      return alert(state);
    } else {
      // 登陆;
      reqLogin(this.state).then(res => {
        if (res.status === 200 && res.data.code) {
          // 通知父组件切换到首页
          // 存一份用户数据到本地
          return alert("登陆成功！");
        } else {
          alert(res.data.msg);
        }
      });
    }
  };
  // 渲染
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1>登陆</h1>
        <form className="form">
          <label>
            <input
              type="text"
              placeholder="用户名"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="密码"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <button type="button" onClick={this.handleSubmit}>
              提交
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Index;
