import React from "react";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is: false,
      name: "阿飞"
    };
  }
  // 拦截钩子函数:性能优化的关键函数
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.is === this.state.is) {
      return false;
    } else if (this.props.name === nextProps.name) {
      return false;
    }
    return true;
  }
  // 渲染
  render() {
    console.log("我被更新了");
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
