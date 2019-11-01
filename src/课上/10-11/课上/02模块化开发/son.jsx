import React from "react";

export default props => {
  return (
    <div>
      <img
        src={props.src || require("./img/default.jpg")}
        width={props.width || "200"}
        height={props.height || "200"}
        alt="产品-手机"
      />
      <p>￥：{props.$ || "0.00"}元</p>
      <p>{props.name || "--"}</p>
      <p>{props.diss || "--"}</p>
      <p>{props.count || "0"}</p>
    </div>
  );
};
