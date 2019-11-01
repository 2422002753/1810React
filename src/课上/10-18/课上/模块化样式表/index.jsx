import React, { Component } from "react";
// 使用脚手架内置的css-module
import style from "./index.module.scss";
import { Home } from "./index.jsx";
class Index extends Component {
  render() {
    return (
      <div className={style.box}>
        <div>
          <h1>锐步内容啊是的哈说的话</h1>
        </div>
        <Home>123456</Home>
      </div>
    );
  }
}

export default Index;
