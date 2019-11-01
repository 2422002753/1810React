import React from "react";
// svg矢量图：它不是像素构成，它是线和颜色构成。优点：放大不会失真，不会模糊；缺点：颜色单一，不能做丰富图画；
import Son from "./son";
export default class Index extends React.Component {
  render() {
    const imgs = [
      {
        src: require("./img/huaweimate20x.jpg"),
        $: "2",
        name: "华为 mate 20x",
        diss: "华为旗舰店",
        count: "10万+"
      },
      {
        src: require("./img/huaweimete30.png"),
        $: "3",
        name: "华为 mate 30",
        diss: "海淀中关村",
        count: "10万+"
      },
      {
        src: require("./img/iphone11.jpg"),
        $: "0",
        name: "iphone11",
        diss: "小张手机专卖店",
        count: "1"
      },
      {
        src: require("./img/iphone8.jpg"),
        $: "1",
        name: "iphone8",
        diss: "小张手机专卖店",
        count: "30"
      }
    ];
    return (
      <div className="flex">
        {imgs.map((item, index) => {
          return (
            <Son
              src={item.src}
              $={item.$}
              name={item.name}
              diss={item.diss}
              count={item.count}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
