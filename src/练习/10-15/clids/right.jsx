import React from 'react';

export default class Left extends React.Component {
	render() {
		return (
			<div className='right-big'>
				<div style={{ marginTop: '10px' }} className='right-top'>
					{
						this.props.data.map((item, index) => {
							return <div key={index} className='right-small'>{item}</div>
						})
					}
				</div>
				<div className='right-left'>
					<div className='right-left-son'>
					</div>
					<p style={{ margin: "0 0 0 40px" }}>由于浏览器安全限制,数据是不可以直接跨域(包括不同的根域名、二级域名、或不同的端口)请求的,除非目标域名授权你可以访问。比如设置crossdomain.xml 或在http头部里授权，但是crossdomain.xml会允许设置的网站访问所有的数据,而头部设置又非常麻烦。所以可以在你授权的数据返回里设置jsonp来让该接口允许所有的调用者获取数据。</p>
					
				</div>
				<div className='right-right'>
					<div className='right-right-top'></div>
					<div className='right-right-top'></div>
					<div className='right-right-buttom'></div>
				</div>
			</div >
		)
	}
}