import React, { Component } from "react";
// 懒加载：按需加载组件----代码切割
/*
问题：
默认情况下webpack会将引入的所有组件都打包成一个js文件，当用户访问时，会造成请求消耗，对有些不常用的功能也会被加载进来，造成不必要的浪费；
解决：使用懒加载，按需加载组件，节省性能开销；拆分js文件，当用户操作需要显示该组件的时候才会请求加载进来。
语法：使用react.lazy方法加载组件
使用react.Suspense组件包裹懒加载组件，该组件上有一个fallback属性，当懒加载组件还未加载成功时，显示fallback属性里的内容；
缺点：增加了http请求，如果用户此时网路不好的话，就可能需要更多的时间加载组件；
注意：所以咱们再使用懒加载的时候，酌情使用，对于一些内容体积小的可以不用懒加载，尤其是首屏就需要用户看到的内容一律不要用懒加载；
*/
const Child = React.lazy(() => import("./child"));
const Child1 = React.lazy(() => import("./child2"));
const Child2 = React.lazy(() => import("./child3"));
class Index extends Component {
  constructor() {
    super();
    this.state = {
      dom: "child"
    };
  }
  // 加载
  setDom = name => {
    this.setState({
      dom: name
    });
  };
  // 渲染
  render() {
    return (
      <div>
        <button onClick={() => this.setDom("child")}>第一个组件</button>
        <button onClick={() => this.setDom("child2")}>第二个组件</button>
        <button onClick={() => this.setDom("child3")}>第三个组件</button>
        {this.state.dom === "child" ? (
          <React.Suspense
            fallback={
              <div style={{ color: "red" }}>"我正在加载第一个组件"</div>
            }
          >
            <Child />
          </React.Suspense>
        ) : this.state.dom === "child2" ? (
          <React.Suspense
            fallback={
              <div style={{ color: "blue" }}>"我正在加载第二个组件"</div>
            }
          >
            <Child1 />
          </React.Suspense>
        ) : (
          <React.Suspense
            fallback={
              <div style={{ color: "yellow" }}>"我正在加载第三个组件"</div>
            }
          >
            <Child2 />
          </React.Suspense>
        )}
      </div>
    );
  }
}

export default Index;
