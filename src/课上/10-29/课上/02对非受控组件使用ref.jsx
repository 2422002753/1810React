import React, { Component } from "react";

class Index extends Component {
  constructor() {
    super();
    // 1.创建一个ref对象
    this.myRef = React.createRef();
    this.file = React.createRef();
  }
  // 渲染
  render() {
    return (
      <div>
        {/* 2.绑定元素---用创建好的ref对象来获取元素 */}
        <div ref={this.myRef}>我是一行内容</div>
        <input type="file" ref={this.file} onChange={this.fileChange} />
      </div>
    );
  }
  // 监听文件上传组件
  fileChange = event => {
    // console.log(event.target);
    // 获取一下file
    console.log(this.file.current.value);
  };
  // 挂载完成
  componentDidMount() {
    // 设置元素的样式
    this.myRef.current.style.color = "red";
    this.myRef.current.style.fontSize = "60px";
  }
}

export default Index;
