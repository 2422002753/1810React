import React, { Component } from "react";
// 子组件class
class Child extends Component {
  render() {
    return <input type="text" />;
  }
}

// 主页面class组件
class Index extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div>
        <Child ref={this.myRef} />
      </div>
    );
  }
  componentDidMount() {
    console.log(this);
  }
}

export default Index;
