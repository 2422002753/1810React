import React from 'react';
import '../api/index';
// 引入搜索框
import './seach.css';
// 引入jsonp
import getBaidu from '../api/index.js';
// 引入vant框架
import { Button, Input } from 'antd';
export default class Seach extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: []
    };
  }
  // 绑定input的value值
  handleChange = enevt => {
    this.setState({
      input: enevt.target.value
    });
  };
  handleClick = () => {
    //   接口请求
    getBaidu(this.state.input).then(data => {
      this.setState({
        list: data.s
      });
    });
  };
  render() {
    return (
        // 搜索框的内容
      <div className='content'>
        <Input
         className ='ant-input'
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <Button type="primary" onClick={this.handleClick}>
          搜索
        </Button>
        {/* 遍历li把请求的数据渲染 */}
        <ul className="list-ul">
          {this.state.list.map((item, index) => {
            return (
              <li className="list_li" key={index}>
                  {/* 判断下标是否准确 */}
                {index + 1 > 9 ? index + 1 : '0' + (index + 1)}、{item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
