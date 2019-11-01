import React from "react";

export default () => {
  let el = React.createElement;
  return el("header", { key: "头部", className: "header" }, [
    el("button", { key: 1 }, "首页"),
    el("button", { key: 2 }, "新闻"),
    el("button", { key: 3 }, "关于")
  ]);
};
