import React from "react";
// 3.数据使用
import context from "./context";
export default class Main extends React.Component {
  static contextType = context;
  render() {
    console.log(this.context);
    return (
      <div>
        <h1>我也想试试跟父组件一样的使用方法</h1>
      </div>
    );
  }
}

/*
 <context.Consumer>
        {data => {
          return (
            <div>
              <h2>
                {data.name}、{data.age}、{data.sex}
              </h2>
              <button
                onClick={() => data.setData({ name: "name", value: "小聂" })}
              >
                修改名字
              </button>
              <button
                onClick={() =>
                  data.setData({ name: "age", value: data.age + 1 })
                }
              >
                修改年龄
              </button>
            </div>
          );
        }}
      </context.Consumer>
    
*/
