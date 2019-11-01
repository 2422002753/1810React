//顶部组件
import React from 'react';
//引入react

export default (props) => {
    return <React.Fragment>
        <ul className='top'>
            <li style={{ marginLeft: '12px' }}>服务注册</li>
            <li>Portal</li>
            <li>OPS</li>
            <li>服务管理</li>
            <li style={{ marginRight: '12px' }}>发布系统</li>
        </ul>
        <ul className='hulk'>
        <li>HULK API</li>
        </ul>
    </React.Fragment>
};