import React from "react";
import Son from "./son";
export default class Index extends React.Component {
  // 学习点组件:概念：一个对象得属性是组件，用对象点属性得写法出来得组件就叫点组件
  render() {
    return (
      <React.Fragment>
        <Son type="div" text="我是一个div" />
        <Son type="h1">
          <span>元素</span>
        </Son>
        <Son type="p" />
        <Son />
      </React.Fragment>
    );
  }
}
