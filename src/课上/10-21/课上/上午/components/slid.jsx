import React from "react";
// 左侧导航
export default props => {
  return (
    <ul style={{ border: "1px solid red" }}>
      {props.nav.length &&
        props.nav.map(item => {
          return (
            <li onClick={() => props.queryinfo(item.id)} key={item.id}>
              {item.name}
            </li>
          );
        })}
    </ul>
  );
};
