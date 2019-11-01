import React, { Component } from "react";

class Index extends Component {
  // 区分一下：被触发的元素和绑定事件的元素
  handleCLick = event => {
    // event.target 它是不固定的，它表示被触发的元素
    // event.currentTarget 它是固定的，他表示事件所绑定的元素
    console.log(event.currentTarget);
  };
  // 渲染
  render() {
    return (
      <div>
        <ul onClick={this.handleCLick}>
          <li>1111111</li>
          <li>2222222</li>
        </ul>
      </div>
    );
  }
}

export default Index;
