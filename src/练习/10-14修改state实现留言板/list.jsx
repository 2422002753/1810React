import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <ul className="bottom">
        <li className="bottom-li">
          <p className="bottom-left">
            当前留言信息条数为：{this.props.data.length}条
          </p>
          <p className="bottom-center">
            <input
              type="text"
              value={this.props.value}
              onChange={this.props.input2}
            />
            <button onClick={this.props.indexof}>查</button>
          </p>
          <p className="bottom-right" onClick={this.props.deleteall}>
            清空留言板
          </p>
        </li>
        {this.props.data.map((item, index) => {
          return (
            <li key={index} className="bottom-li">
              <div className="delet">
                {index + 1}、{item}
              </div>
              <div className="delete">
                <button onClick={() => this.props.deleteItem(index)}>
                  删除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
