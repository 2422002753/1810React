import React, { Component } from 'react';
import Header from './header';
import Nav from './min';
import './index.css';
export default class Index extends Component {
  constructor() {
    super();
    // 定义默认的背景和字体颜色
    this.state = {
      background: window.localStorage.getItem('background') || '#B84130',
      color: window.localStorage.getItem('color') || '#FFFFFF'
    };
  }
  // 获取input的value值
  handleChange = event => {
    const { name, value } = event.target;
    name === 'background'
      ? window.localStorage.setItem('background', value)
      : window.localStorage.setItem('color', value);
    this.setState({
      [name]: value
    });
  };
  // 改变背景颜色和字体颜色
  onChlick = (background, color) => {
    window.localStorage.setItem('background', background);
    window.localStorage.setItem('color', color);
    this.setState({
      background,
      color
    });
  };
  render() {
    return (
      <div>
        {/* 导航栏 */}
        <Header onclick={this.onChlick} teme={this.state} handlechange={this.handleChange} />
        {/* 主题内容 */}
        <Nav teme={this.state} />
      </div>
    );
  }
}
