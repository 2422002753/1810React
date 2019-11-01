import React from 'react';
import './index.css';
import {Button, Menu, Dropdown, message } from 'antd';
export default class Sider extends React.Component {
  render() {
    const onClick = ({ key }) => {
      message.info(`Click on item ${key}`);
    };
  
    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1">{this.props.cont1}</Menu.Item>
        <Menu.Item key="2">{this.props.cont2}</Menu.Item>
      </Menu>
    );
    return (
      
        <Dropdown overlay={menu}>
          <Button type="primary"  className="ant-dropdown-link" >
            {this.props.siderlist}
          </Button>
        </Dropdown>
     
    );
  }
}
