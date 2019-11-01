import React from 'react';

// 组件的声明
function  Index(){
    // 组建的返回值
    /*
    createElement()方法: 创建虚拟dom，
        它有三个参数：
            第一个参数:原生dom的类型，
            第二个参数：是dom元素的属性，
            第三个参数：是dom元素的内容/子元素
    */ 
   return React.createElement("div",{},[
       React.createElement('p',{key: 1},"我是p标签"),
       React.createElement("h1",{key: 2},"我是h1字体")
   ])
}
// 导出组件
export default Index;