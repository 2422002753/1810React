//内容组件
import React from 'react';
//引入react

export default () => {
    return <div className="chest">
        {/*左侧部分*/}
        <div className="leftChest">
            <div className="chestText">温度控制中心</div>
            <div className="chestText">干扰分析</div>
            <div className="chestText">自动运维</div>
            <div className="chestText">策略控制</div>
            <div className="chestText">服务画像</div>
            <div className="chestText">重调度</div>
            <div className="chestText" style={{ margin: '3px 2px 0 3px' }}>弹性</div>
            <div className="chestText">容量规划</div>
            <div className="chestText">IPAM</div>
            <div className="chestText">配置中心</div>
            <div className="chestText" style={{ margin: '0 2px 3px 17px' }}>伸缩</div>
        </div>
        {/*右侧部分*/}
        <div className="rightChest">
            <div className="chestLeft">MQ</div>
            <div className="chestRight">服务树</div>
            <div className="chestLeft">Redis</div>
            <div className="chestRight">DNS和Token服务</div>
            <div className="chestLeft">DB</div>
            <div className="chestRight">CMDB</div>
        </div>
        <ul className='kub'>
            <li>Kubernetes API</li>
        </ul>
    </div>
}