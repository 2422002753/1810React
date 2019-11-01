import React from "react";
// 该使用转发了，所以不要用无状态组件和class组件
export default React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
