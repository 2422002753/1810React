import React, { Component } from "react";

class Index extends Component {
  constructor() {
    super();
    // 1.创建一个ref对象
    this.myInput = React.createRef();
  }
  // 渲染
  render() {
    return (
      <div>
        {/* 2.绑定元素---用创建好的ref对象来获取元素 */}
        <form action="">
          <input
            type="text"
            ref={this.myInput}
            autoComplete="off"
            name="user"
            tabIndex="1"
            placeholder="用户名"
          />
          <br />
          <input type="text" placeholder="密码" tabIndex="3" />
          <br />
          <input type="text" placeholder="邮箱" tabIndex="2" />
          <button>提交</button>
        </form>
      </div>
    );
  }
  // 挂载完成
  componentDidMount() {
    // 自动获取焦点
    this.myInput.current.focus();
  }
}

export default Index;
