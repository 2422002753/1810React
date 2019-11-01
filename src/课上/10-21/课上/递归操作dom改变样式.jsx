import React from "react";
import "./index.scss";
// 函数自己调自己
// 递归：必须有终止的条件，否则就成死循环了；
// 模拟后端给的假数据
const data = [
  {
    id: 1,
    name: "react",
    $: 10000,
    arr: [
      { id: 10001, name: "react视频教程", $: 8000 },
      { id: 10002, name: "react文字教程", $: 2000 }
    ]
  },
  {
    id: 2,
    name: "vue3.0",
    $: 2000,
    arr: [
      { id: 20001, name: "vue3.0源码", $: 1000 },
      {
        id: 20002,
        name: "vue3.0视频",
        $: 1000,
        arr: [
          { id: 2000201, name: "基础教程", $: 300 },
          { id: 2000202, name: "高级教程", $: 700 }
        ]
      }
    ]
  }
];
export default class Index extends React.Component {
  // 可以使用常规的操作dom的方法去控制样式
  setShow = event => {
    let classname = event.currentTarget.className;
    if (classname === "hide") {
      event.currentTarget.className = "show";
    } else {
      event.currentTarget.className = "hide";
    }
  };
  // 递归组件完成不确定性嵌套层数的数据，但是前提是数据结构必须统一
  recursion = data => {
    return (
      <ul>
        {data.map(item => {
          return (
            <li key={item.id} className={"hide"} onClick={this.setShow}>
              <p>{item.name}</p>
              {/* 递归必须有终止条件 */}
              {item.arr && this.recursion(item.arr)}
            </li>
          );
        })}
      </ul>
    );
  };
  // 渲染
  render() {
    return (
      <div>
        <h1>递归</h1>
        {this.recursion(data)}
      </div>
    );
  }
}
