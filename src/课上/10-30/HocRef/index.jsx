import React, { Component } from 'react';
import hoc from './hoc';
import Forward from './forward';

// 做两个组件--- 一个是转发ref的组件,一个是hoc组件
class index extends Component {
    constructor(){
        super();
        // hoc高阶组件接收一个组件，返回一个class组件
        this.Hoc = hoc(Forward);
        // 1.创建一个ref对象
        this.myRef = React.createRef();
    }
    render() {
        return (
            <div>
                <this.Hoc ref={this.myRef}/>
            </div>
        );
    }
    // 获取转发的ref
    componentDidMount(){
        
    }
}

export default index;