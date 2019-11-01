import React, { Component } from "react";
// react里的事件：合成事件  react里的event对象：合成对象
class Index extends Component {
  // 点击事件
  handleClick = event => {
    /*
    event对象常用的：清冒泡、禁止默认行为、获取元素【当前被触发的元素、事件所绑定的元素】、坐标值
    *react合成事件对象里有一个很重要的api：强制保留event对象属性值 event.persist()
    */
    console.dir(event);
    // 清除冒泡:必须显示的使用stopPropagation()
    event.stopPropagation();
    // 禁止默认事件：preventDefault()
    evetn.preventDefault();
    // 获取被触发元素
    event.target;
    // 获取事件绑定的元素
    event.currentTarget;
    // 获取原生的event: nativeEvent
    event.nativeEvent;
  };
  // 渲染
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点击</button>
      </div>
    );
  }
}

export default Index;
