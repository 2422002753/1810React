//引入react
import React from 'react';
//引入api
import '../api';
//引入外部样式表
import './seach.css';
//引入组件
import getBaidu from '../api/index.js';
//引入ui框架中的button和input
import {Button, Input} from 'antd';

export default class Seach extends React.Component {
    constructor(props) {
        super(props);
        //清空列表
        this.state = {
            input: '',
            list: [],
            is: true
        };
    }

    handleChange = enevt => {
        this.setState({
            //给input赋值
            input: enevt.target.value
        });
    };
    handleClick = () => {
        //获取百度接口，将接口内容渲染到页面
        getBaidu(this.state.input).then(data => {
            this.setState({
                list: data.s
            });
        });
    };
    handleValue = (event) => {
        this.setState({
            input: event.target.innerHTML.substring(3, event.target.innerHTML.length - 32)
        });
    };

    handleMore = (event) => {
        if (this.state.is) {
            var ull = document.getElementsByClassName('list-ul')[0];
            ull.className = "list-ull";
        } else {
            var ulll = document.getElementsByClassName('list-ull')[0];
            ulll.className = "list-ul";
        }
        this.setState({
            is: !this.state.is
        })
    };
    handleRemove = (event,index) => {
        this.state.list.splice(index, 1);
        this.setState({
            input: "123"
        });
        console.log(event.target);
        console.log(index);
    };

    render() {
        return (
            <div className='content'>
                <Input
                    className='ant-input'
                    type="text"
                    value={this.state.input}
                    onChange={this.handleChange}
                    onKeyUp={this.handleClick}
                />
                <ul className="list-ul">
                    {this.state.list.map((item, index) => {
                        return (
                            <li className="list_li" key={index} onClick={this.handleValue}>
                                {index + 1 > 9 ? index + 1 : '0' + (index + 1)}、{item}
                                <button className="btn1" onClick={(event) => this.handleRemove(event,index)}>删除</button>
                            </li>

                        )
                    })}

                </ul>
                <button className="btn2" onClick={this.handleMore}>{this.state.is ? '更多' : '收起'}</button>
            </div>
        );
    }
}
