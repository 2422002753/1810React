import React from "react";
// class 声明关键字 Index 类的名字【儿子的角色】  extends 继承  React.Component 基类【父亲的角色】
// 派生类就是继承了其他的类而得到的类；【儿子】===派生类
// 继承：相当于儿子继承了父亲的dna
class Index extends React.Component {
  // 构造函数
  constructor() {
    // 派生类里的constructor必须使用超级函数
    // 在派生类里super方法，是用来实例化基类的构造函数，从而得到自己的this
    super();
    this.name = "宋宇";
  }
  // 渲染函数
  render() {
    return (
      <div>
        <h1>我是一个class组件 {this.name} </h1>
      </div>
    );
  }
}

// 导出组件
export default Index;
