import React from "react";
import "./index.css";
export default () => {
  let el = React.createElement;
  return el("div", { className: "wrap" }, [
    el("header", { key: "头部", className: "header" }, [
      el("button", { key: 1 }, "首页"),
      el("button", { key: 2 }, "新闻"),
      el("button", { key: 2 }, "关于")
    ]),
    el("main", { key: "中间区", className: "main" }, "中间区"),
    el("footer", { key: "底部", className: "footer" }, "底部")
  ]);
};
