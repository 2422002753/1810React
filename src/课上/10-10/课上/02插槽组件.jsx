import React from "react";
import "./index.css";
import Home from "./components/home";
import Child from "./components/child";
export default () => {
  return (
    <Home myname="宋宇">
      <Child />
      <Child />
    </Home>
  );
};
