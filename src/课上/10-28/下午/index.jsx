import React, { Component } from "react";
// 2.引入上下文对象
import context from "./context";
const Main = React.lazy(() => import("./main"));
class Index extends Component {
  // 订阅者： contextType
  static contextType = context;
  // 触发更新的函数
  setData = ({ name, value }) => {
    this.context[name] = value;
    this.forceUpdate();
  };
  // 渲染
  render() {
    return (
      <div>
        <h1> 我是上下文组件 </h1>
        <context.Provider value={{ ...this.context, setData: this.setData }}>
          <React.Suspense fallback="我正在加载">
            <Main />
          </React.Suspense>
        </context.Provider>
      </div>
    );
  }
}

export default Index;
