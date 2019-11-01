// hooks 它不能用于class组件，它是为无状态组件量身打造的
import React from "react";

export default () => {
  // 初始化一个state
  const [obj, setObj] = React.useState({
    name: "阿涵",
    age: 32,
    job: "it总监"
  });
  const addAge = () => {
    // 在hook里修改值，它的运行方式是用新值直接替换掉旧值
    // 所以，对于复合型的值，我们需要手动的进行合并再调用修改方法
    setObj({ ...obj, age: obj.age + 1 });
  };
  // 生命周期--万能
  React.useEffect(() => {
    // 生命周期函数--合并了三个阶段
    console.log("1.我被触发了");
    return () => {
      // 在函数中优先执行
      console.log(123456);
    };
  }, [obj.age]); // 指定监听的参数

  React.useEffect(() => {
    // 生命周期函数--合并了三个阶段
    console.log("2.我被触发了");
    return () => {
      // 在函数中优先执行
      console.log(123456);
    };
  }, [obj.name]); // 指定监听的参数
  // 渲染
  return (
    <React.Fragment>
      <h1>学习基础的入门的hook</h1>
      <h2>有一个人叫：{obj.name}</h2>
      <h2>他今年：{obj.age}岁</h2>
      <h2>他的职务是：{obj.job}</h2>
      <button onClick={addAge}>长一岁</button>
    </React.Fragment>
  );
};
