import React from "react";
import Child from "./child";
export default class Index extends React.Component {
  // ref的转发：转发父组件中的ref对象到子组件中，以获取子组件的dom元素
  constructor() {
    super();
    // 1.在父组件中创建ref对象
    this.myRef = React.createRef();
  }
  render() {
    return (
      <>
        {/* 2.绑定到自定义组件上 */}
        <Child ref={this.myRef} name="阿三" age="男" />
      </>
    );
  }

  componentDidMount() {
    console.log(this.myRef);
  }
}
