import React from 'react';
import '../index.css';
//使用Ant Design
import { Button, Menu, Dropdown } from 'antd';
export default class rollout extends React.Component {
  render() {
    const menu = (
      // 使用ui库，添加下拉内容
      <Menu>
        <Menu.Item key="1">{this.props.first}</Menu.Item>
        <Menu.Item key="2">{this.props.second}</Menu.Item>
      </Menu>
    );
    return (
      //渲染
      <Dropdown overlay={menu}>
        <Button type="primary" className="ant-dropdown-link" >
          {this.props.siderlist}
        </Button>
      </Dropdown>

    );
  }
}
