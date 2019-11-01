//  底部搜索框
import React from 'react';
import './index.css';
//  引入React

export default () => {
    return (
        <div className='box'>
            <div className="wrap">
                <div className="hezi">
                    <input type="text" className="sousuo" />
                    <button className='btn'>搜索</button>
                </div>
            </div>
            <p>
                喵~在此反馈您的意见和建议吧，<a href="">立刻反馈</a></p>
        </div>
    )
}