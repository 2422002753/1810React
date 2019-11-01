// hooks 它不能用于class组件，它是为无状态组件量身打造的
import React from "react";

export default () => {
  // 初始化一个state
  const [count, setCount] = React.useState(100);
  const [text, setText] = React.useState("今天我很开心，因为我睡了一个好觉");
  // 改变input
  const handleChange = ({ target }) => {
    setText(target.value);
  };
  return (
    <React.Fragment>
      <h1>学习基础的入门的hook{count}</h1>
      <button
        onClick={() => {
          setCount(1 + count);
        }}
      >
        计数器
      </button>
      <input type="text" value={text} onChange={handleChange} />
    </React.Fragment>
  );
};
