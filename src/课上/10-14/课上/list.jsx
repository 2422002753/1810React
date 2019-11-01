import React from "react";
import PropTypes from "prop-types";
export default class List extends React.Component {
  render() {
    return (
      <ul>
        <li>当前留言信息条数为：{this.props.data.length}条</li>
        {Array.isArray(this.props.data) &&
          this.props.data.map((item, index) => {
            return (
              <li key={index}>
                {index + 1}、{item}
              </li>
            );
          })}
      </ul>
    );
  }
  // 默认的属性值：就是为了防止属性的丢失而导致的错误；
  // 静态方法或属性
  static defaultProps = {
    data: []
  };
  // 属性值的验证
  static propTypes = {
    data: PropTypes.array
  };
}
// 属性的默认值
// List.defaultProps = {
//   data: []
// };
