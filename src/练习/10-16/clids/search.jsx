import React from 'react';
import '../api/pomise';
// 引入搜索框
import '../index.css';
// 引入jsonp
import getBaidu from '../api/pomise';
// 使用Ant Design
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
    //  进行接口请求
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
          style={{ width: 280 }}
          className='ant-input'
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <Button style={{ width: 75 }} type="primary" onClick={this.handleClick}>
          搜索
        </Button>
        {/* 遍历li把数据渲染出去 */}
        <ul className="list-ul">
          {this.state.list.map((item, index) => {
            return (
              <li className="list_li" key={index}>
                {index + 1 > 9 ? index + 1 : '0' + (index + 1)}.{item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
