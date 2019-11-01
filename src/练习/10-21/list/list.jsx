import React, { Component } from 'react';
import '../index.scss'

// 函数自己调用自己，必须有终止条件，否则就成死循环
// 假数据，模拟后端给的数据
const data = [
	{
		id: 1, name: '国籍	▶', arr: [
			{ id: 101, name: '中国' },
			{ id: 102, name: '外国' }
		]
	},
	{
		id: 2, name: '省区	▶', arr: [
			{ id: 201, name: '河北省' },
			{
				id: 202, name: '衡水市	▶', arr: [
					{ id: 20201, name: '深州' },
					{ id: 20202, name: '武邑' }
				]
			}
		]
	},
	{
		id: 3, name: '汽车	▶', arr: [
			{ id: 301, name: '跑车' },
			{ id: 302, name: '越野' }
		]
	},
	{
		id: 4, name: '导航四	▶', arr: [
			{ id: 401, name: '选项1' },
			{
				id: 402, name: '选项2	▶', arr: [
					{ id: 40201, name: '选项2.1' },
					{ id: 40202, name: '选项2.2' },
					{ id: 40203, name: '选项2.3' }
				]
			}
		]
	},
	{
		id: 5, name: '导航五	▶', arr: [
			{ id: 501, name: '选项1' },
			{ id: 502, name: '选项2' }
		]
	}
]
class List extends Component {
	// 递归查询并修改值
	queryData = (id, arr) => {
		arr.forEach(item => {
			// 通过ID找到当前数据
			if (id === item.id) {
				// 找到后添加或修改class属性
				item.class === 'hide' ? item.class = 'show' : item.class = 'hide';
			} else {
				// 没找到就是用递归继续找
				item.arr && this.queryData(id, item.arr)
			}
		});
	}
	// 可以使用常规的操控dom的方法去控制样式
	setShow = (id, event) => {
		event.stopPropagation()
		this.queryData(id, data, event)
		// 强制更新
		this.forceUpdate();
	}
	// 递归组件完成不确定性嵌套的数据，但是数据结构必须统一
	recursion = data => {
		return <ul className='list-ul'>{
			data.map(item => {
				return <li key={item.id} className={item.class} onClick={(event) => this.setShow(item.id, event)}>
					<p className='list-p'>{item.name}</p>
					{
						item.arr && this.recursion(item.arr)
					}
				</li>
			})
		}</ul>
	}
	render() {
		return (
			<div className="home">
				{this.recursion(data)}
			</ div >
		);
	}
}

export default List;