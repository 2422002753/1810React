import React from 'react';
import './index.css'
import Input from './clids/input';
import List from './clids/list';

export default class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			input: '',
			list: []
		}
	}
	//填写内容内容
	setInput = (e) => {
		this.setState({
			input: e.target.value
		})
	}
	//提交留言
	Add = () => {
		this.setState({
			list: [...this.state.list, this.state.input],
			input: ''
		})
	}
	//删除单个
	Delete = (index) => {
		const list = [...this.state.list]
		list.splice(index, 1)
		this.setState({
			list: list
		})
	}
	// 全部删除
	deleteAdd = () => {
		this.setState({
			list: []
		})
	}
	render() {
		return (
			<div className='flex home'>
				<Input
					value={this.state.input}
					setinput={this.setInput}
					add={this.Add} />
				<List
					list={this.state.list}
					delete={this.Delete}
					deleteadd={this.deleteAdd}
					key={this.state.list} />
			</div>
		)
	}
}