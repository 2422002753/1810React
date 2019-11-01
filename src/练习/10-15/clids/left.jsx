import React from 'react';

export default class Left extends React.Component {
	render() {
		return (
			<div className='left-big' >
				{
					this.props.data.map((item, index) => {
						return <div key={index} className='left-small'>{item}</div>
					})
				}
			</div>
		)
	}

}