import React from 'react';
//提交
export default props => {
	return (
		<div className='input-top'>
			<input type="text" placeholder='请输入留言信息' value={props.value} onChange={props.setinput} />
			<button className='input-button' onClick={props.add}>提交</button>
		</div>
	)
}