import React from "react";

export default props => {
  return (
    <header>
      <nav>
        <ul className="flex">
          <li onClick={() => props.settheme("red")}>
            <button>中国红</button>
          </li>
          <li onClick={() => props.settheme("blue")}>
            <button>天之蓝</button>
          </li>
          <li onClick={() => props.settheme("yellow")}>
            <button>土豪金</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
