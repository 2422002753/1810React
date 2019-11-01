import React from "react";
import "./index.css";
export default () => {
  // class绑定样式、style
  return React.createElement(
    "div",
    { className: "red font20" },
    React.createElement(
      "p",
      { style: { color: "blue", fontSize: "40px" } },
      "庆祝祖国70周年"
    )
  );
};
