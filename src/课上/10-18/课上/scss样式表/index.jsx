// css 作用域
import React, { Component } from "react";
// cnpm i node-sass -D
import "./index.scss";
class Index extends Component {
  render() {
    return (
      <div className="box">
        <h1>今天是周五了，我们都很开心！</h1>
        <div className="xxx">
          <ul>
            <li>123456</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Index;
