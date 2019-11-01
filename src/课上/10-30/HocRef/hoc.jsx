// 高阶组件
import React from 'react';

export default Components =>{
    class Hoc extends React.Component{
        render(){
            // 高阶组件里，class组件里要使用传进来的组件
            return(
                <div>
                    <Components ref={this.props.myref} />
                </div>
            )
        }
    }
    //  这里是关键---这里是转发ref的；
    return React.forwardRef((props,ref)=>{
        return (
            // 只要是在自定义组件上使用ref属性，那么该组件必须是用转发函数声明的
            <Hoc props={props} myref={ref}/>
        )
    });
}