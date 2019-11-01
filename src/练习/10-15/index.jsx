import React from 'react';
import './index.css'
import Left from './clids/left';
import Right from './clids/right';
export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			left: ['1', '2', '3', '4', '5'],
			right: ['1', '1', '1', '1', '1', '1']
		}
	}
	render() {
		return (
			<div className='flex home'>
				<Left data={this.state.left} />
				<Right data={this.state.right} />
			</div>
		)
	}
}