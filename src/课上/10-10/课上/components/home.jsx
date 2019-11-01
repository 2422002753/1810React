import React from "react";
// props:属性
// 无状态组件：只有一个props，其他的react特性没有。

export default props => {
  /*
  props.children：当有一组子元素的时候，它是一个集合，单独的使用它--这种方式叫：隐式渲染；
  显式渲染：需要使用顶级api：React.Children.map方法。
  该方法有两个参数：第一个是要被遍历的数组【props.children】
    第二个参数是一个回调函数，是对每一项子元素做处理的；
  针对遍历出来的子元素，做克隆，然后对克隆出来的元素做处理；
  顶级api：React.cloneElement;
  语法：三个参数：第一个是要被克隆的元素，第二个参是属性，第三个参是内容/子元素
  */
  return (
    <div>
      <h1>
        {React.Children.map(props.children, function(item, index) {
          // 对每一个遍历出来的子元素进行克隆处理
          let newItem = React.cloneElement(item, {}, index);
          return newItem;
        })}
      </h1>
    </div>
  );
};
