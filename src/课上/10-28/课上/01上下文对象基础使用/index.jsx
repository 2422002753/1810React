import React, { Component } from "react";
import Child1 from "./child1";
// 上下文对象中提供数据的一定是父组件或者说是根组件
// 引入上下文对象
import context from "./context";
class Index extends Component {
  constructor() {
    super();
    this.state = {
      theme: "red"
    };
  }
  render() {
    return (
      <div>
        {/* Provider数据提供者--一般在父组件或根组件 */}
        <context.Provider value={this.state.theme}>
          <Child1 />
        </context.Provider>
      </div>
    );
  }
}

export default Index;
