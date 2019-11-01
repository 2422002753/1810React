import React from "react";
// 闭包： 全局环境中可以访问局部环境里的变量
// 闭包一般用在计数器，或者全局使用的变量的长期存储，为的是不污染全局，集中控制；
function fn() {
  let a = 0;
  return function() {
    // ++ === += 1
    return ++a;
  };
}
const f1 = fn();
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());
/************** */

export default class Index extends React.Component {
  render() {
    return <div>123</div>;
  }
}
