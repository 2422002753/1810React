import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
const text1 = (
  <ul>
    <li style={{ fontSize: '20px' }}>1. 什么是状态提升？</li>
    <p>
      所谓 状态提升 就是将各个子组件的 公共state 提升到它们的父组件进行统一存储、处理（这就是所谓的"单一数据源"），
      然后再将父组件处理后的数据或函数props到各子组件中。<br />

      那么如果子组件 要 修改父组件的state该怎么办呢？我们的做法就是 将父组件中负责setState的函数，
      以props的形式传给子组件，然后子组件在需要改变state时调用即可。
    </p>
    <li style={{ fontSize: '20px' }}>2. 掌握方法</li>
  </ul>
);
export default class Index extends React.Component {
  render() {
    return (
      <div style={{ width: "1000px", margin: "auto", fontSize: '25px', fontWeight: '700' }}>
        <Collapse bordered={false} defaultActiveKey={["1"]}>
          <Panel header="状态提示同步数据展示" key="1">
            {text1}
          </Panel>
        </Collapse>
      </div>
    );
  }
}
