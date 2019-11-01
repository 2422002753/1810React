import React from "react";
import "./index.scss";
// 假数据---后台的树形菜单数据
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
  // 递归查询数据，并添加修改class样式
  queryItem = (id, data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        if (data[i].class === "hide") {
          data[i].class = "show";
        } else {
          data[i].class = "hide";
        }
      } else {
        // 如果当前这一层数据没找到，说明这个id来自于深层嵌套，所以，使用递归
        data.arr && this.queryItem(id, data.arr);
      }
    }
  };
  setData = id => {
    // id和原数据都要传过去
    this.queryItem(id, data);
    this.forceUpdate();
  };
  // 递归是自己调用自己
  renderDom = data => {
    return (
      <ul>
        {data.map(item => {
          return (
            <li
              key={item.id}
              className={item.class}
              onClick={() => this.setData(item.id)}
            >
              <p>{item.name}</p>
              {// 先判断有没有arr
              Array.isArray(item.arr) && this.renderDom(item.arr)}
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return <div>{this.renderDom(data)}</div>;
  }
}
