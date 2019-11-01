// 只有class组件才有生命周期；因为这个生命周期是基类React.Component给的
import React from "react";
import Child from "./child";
export default class Index extends React.Component {
  // 挂载阶段
  constructor() {
    super();
    console.log("准备挂载");
    this.state = {
      is: false
    };
  }

  render() {
    console.log("渲染");
    return (
      <div>
        {this.state.is && <Child />}
        <button
          onClick={() => {
            this.setState({
              is: !this.state.is
            });
          }}
        >
          切换
        </button>
      </div>
    );
  }

  componentDidMount() {
    // 官方提议：自动请求接口卸载挂载成功的钩子函数里
    // ajax请求
    console.log("挂载成功！");
  }

  // 更新
  componentDidUpdate() {
    console.log("更新成功");
  }
}
