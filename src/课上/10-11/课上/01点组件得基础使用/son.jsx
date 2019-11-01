import React from "react";

export default props => {
  // 点组件得优点就是非常之灵活，你传入什么类型他就给你什么类型元素。
  let Type = props.type || "div";
  // &&  || !
  // && 只有左右两边得条件都等于true，那么这个条件才会成立，否则左右有一个不是true，条件就不成立
  if (200 && 888) {
    console.log("ok");
  }
  // || 只要有一个条件成立，则执行当前条件，后面得判断就不会再执行了。但是，如果||两边都不成立，那么他会返回最后一个条件
  if (0 || false) {
    console.log("ok2");
  }
  // ! 求反，取反
  console.log(!true);

  return <Type>{props.children || props.text || "默认值"}</Type>;
};
