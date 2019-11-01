import React from 'react';
//留言组件页面
export default class List extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='list-big'>
				<div className='list-content'>
					<div className='list-lump'>
						{/* 页面输出留言条数 */}
						当前信息共：<span>{this.props.list.length}</span>条
					</div>
					{/* 查询留言 */}
					<input type="text" className='list-find' placeholder='查询留言' />
					<button className='list-findBtn'>查</button>
					{/*清空留言板按钮*/}
					<button className='list-RemoveAll' onClick={this.props.deleteadd}>清空留言板</button>
				</div>
				{
					// 添加留言
					this.props.list.map((item, index) => {
						return (
							<div className='list-content-LY Top30' key={index}>
								<div key={index} className='list-font'>
									{/* 留言序号 */}
									{index + 1}.<span>{item}</span>
									{/* 删除当前留言 */}
									<button onClick={() => this.props.delete(index)} className='list-remove'>删</button>
								</div>
							</div>
						)
					})
				}
			</div >
		)
	}
}