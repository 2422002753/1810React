import React from "react";
// dangerouslySetInnerHTML:相当于 vue  v-html
export default props => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: props.text
      }}
    ></div>
  );
};
