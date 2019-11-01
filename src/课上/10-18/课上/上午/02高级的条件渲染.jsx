import React, { Component } from "react";
import Home from "./pages/home";
const News = React.lazy(() => import("./pages/news"));
const About = React.lazy(() => import("./pages/about"));
class Index extends Component {
  constructor() {
    super();
    let has = window.location.hash.substr(1);
    this.state = {
      page: has || "home"
    };
    // 常量字典值
    this.DICT = {
      HOME: "home",
      NEWS: "news",
      ABOUT: "about"
    };
  }
  // 改变state
  changeState = name => {
    // 修改我state值
    this.setState({
      page: name
    });
    // 修改地址栏的has值
    window.location.hash = name;
  };
  // 渲染
  render() {
    const { HOME, NEWS, ABOUT } = this.DICT;
    let myCom = <Home />;
    switch (this.state.page) {
      case HOME:
        myCom = <Home />;
        break;
      case NEWS:
        myCom = (
          <React.Suspense fallback="正在加载中……">
            <News />
          </React.Suspense>
        );
        break;
      case ABOUT:
        myCom = (
          <React.Suspense fallback="正在加载中……">
            <About />
          </React.Suspense>
        );

        +
        
    }
    return (
      <div>
        <div>
          <button onClick={() => this.changeState(HOME)}>首页</button>
          <button onClick={() => this.changeState(NEWS)}>新闻</button>
          <button onClick={() => this.changeState(ABOUT)}>关于</button>
        </div>
        {myCom}
      </div>
    );
  }
}

export default Index;
