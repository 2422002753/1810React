//引入react
import React from 'react';
import './index.css';
//引入UI框架中的button按钮，菜单，等
import {Button, Menu, Dropdown, Icon, message} from 'antd';

export default class Sider extends React.Component {
    render() {
        //  触发点击事件后将信息传入
        const onClick = ({key}) => {
            message.info(`Click on item ${key}`);
        };

        const menu = (
            <Menu onClick={onClick}>
                <Menu.Item key="1">{this.props.cont1 || this.props.cont4}</Menu.Item>
                <Menu.Item key="2">{this.props.cont2 || this.props.cont5}</Menu.Item>
                <Menu.Item key="3">{this.props.cont3 || this.props.cont6}</Menu.Item>
            </Menu>
        );
        return (
            //返回最后遍历好的内容
            <Dropdown overlay={menu}>
                <Button type="primary" className="ant-dropdown-link">
                    {this.props.siderlist}
                </Button>
            </Dropdown>

        );
    }
}
