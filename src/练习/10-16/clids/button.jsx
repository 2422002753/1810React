import React from 'react';
import { Button } from 'antd';
import '../index.css'
export default class Index extends React.Component {
	//button按钮
	render() {
		return (
			//渲染
			// 添加class样式
			<div className='button-top'>
				<Button type="primary">关于</Button>
			</div>
		);
	}
}