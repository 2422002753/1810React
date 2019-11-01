// 高阶组件
import React from "react";

export default Mycom => {
  return class Hoc extends React.Component {
    render() {
      return <Mycom />;
    }
  };
};
