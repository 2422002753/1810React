// export default Index;
import React, { Component, createRef } from 'react';
import './index.css';
class Index extends Component {
	constructor() {
		super();
		this.inner = createRef();
	}
	// 挂载完成
	componentDidMount() {
		let len = this.inner.current.children.length * 100;
		let count = 0;
		let elLeft = this.inner.current.style;
		this.time = setInterval(() => {
			if (count == -len) {
				count = 0;
			}
			elLeft.left = `${count}vw`;
			count -= 100;
		}, 5000)
	}
	// 渲染

	render() {
		return (
			<div className='slider'>
				<ul className='inner' ref={this.inner}>
					<li style={{ background: 'pink' }}>1</li>
					<li style={{ background: 'yellow' }}>2</li>
					<li style={{ background: 'green' }}>3</li>
				</ul>

			</div>
		);
	}
}

export default Index;