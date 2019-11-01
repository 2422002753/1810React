import React, { Component } from "react";

class Index extends Component {
  // if  switch && || !  ?:
  state = {
    is: false
  };
  render() {
    let { is } = this.state;
    // if判断
    let MyCom = "";
    if (is) {
      MyCom = <h1>我是真值</h1>;
    } else {
      MyCom = <h1>我是假值</h1>;
    }
    return (
      <div>
        <h1>条件渲染</h1>
        {MyCom}
        {/* {is && <h2>如果是真值，则我会显示</h2>}
        {is && <h2>如果是真值，则我会显示</h2> || flag && <h2>如果是假值，则我会显示</h2>}
        {!is ? <h2>1111</h2> : <h3>22222</h3>} */}
      </div>
    );
  }
}

export default Index;
