import React from "react";
// 引入跟根组件同样的上下文对象
import context from "./context";
export default () => {
  return (
    <div>
      <context.Consumer>
        {({ theme }) => {
          return (
            <div style={{ color: theme }}>
              <p>今天是2019年10月最后一周</p>
              <p>今天是2019年10月最后一周</p>
              <p>今天是2019年10月最后一周</p>
              <p>今天是2019年10月最后一周</p>
            </div>
          );
        }}
      </context.Consumer>
    </div>
  );
};
