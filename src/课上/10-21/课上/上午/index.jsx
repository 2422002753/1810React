import React, { Component } from "react";
import Slid from "./components/slid";
import Main from "./components/main";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      qrueList: [],
      data: {}
    };
  }
  // 在页面打开的时候自动请求数据
  componentDidMount() {
    // 假设这里就是请求数据
    this.setState({
      qrueList: require("./data/index.json").qrueList
    });
  }
  // 点击导航查询数据
  queryInfo = id => {
    let item = this.state.qrueList.find(item => {
      return item.id === id;
    });
    this.setState({
      data: item
    });
  };
  // 渲染
  render() {
    const { qrueList, data } = this.state;
    return (
      <div>
        <h1>社会人查询系统</h1>
        <div className="flex">
          <Slid nav={qrueList} queryinfo={this.queryInfo} />
          <Main data={data} />
        </div>
      </div>
    );
  }
}

export default Index;
