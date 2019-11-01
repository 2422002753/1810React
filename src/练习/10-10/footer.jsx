//底部组件
import React from 'react';
//引入react

export default () => {
    return <div className="leg">
        {/*leg里面的第一部分*/}
        <div className="legOne">
            <div className="legOneCon">监控</div>
        </div>
        {/*leg里面的第二部分*/}
        <div className="legTwo">
            <div className="legTwoTop">kube-controlier-manager</div>
            <div className="legTwoLeft">kube-apiserver</div>
            <div className="legTwoLeft">kube-apiserver</div>
        </div>
        {/*leg里面的第三部分*/}
        <div className="legTwo styleS">
            <div className="etcd" style={{ marginBottom: '22px' }}>
                <div className="etcdText">
                    etcd
                </div>
            </div>
            <div className="etcd">
                <div className="etcdText" style={{ padding: '6px 20px', height: '68%' }}>
                    镜像仓库
                </div>
            </div>
        </div>
        {/*leg里面的第四部分*/}
        <div className="legTwo" style={{ width: '270px', marginRight: '0' }}>
            <div className="legTwochang">docker</div>
            <div className="legTwochang">hulk-agent</div>
            <div className="legTwochang legTwoduan">CNI</div>
            <div className="legTwochang legTwoduan">CLI</div>
            <div className="legTwochang">kubelet</div>
        </div>
        <ul className='lang'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li style={{ background: '#fff' }}></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div className='langBox'>
            <ul className='langleft'>
                <li style={{ padding: '0 33px', background: 'green' }}>IDC</li>
                <li>内核与容器</li>
                <li style={{ padding: '0 26px', background: 'rgb(4, 96, 139)' }}>储存</li>
                <li style={{ padding: '0 212px', background: 'rgb(146, 140, 140)' }}>机房</li>
            </ul>
            <ul className='langright'>
                <li style={{ padding: '0 33px', background: 'green' }}>IDC</li>
                <li>内核与容器</li>
                <li style={{ padding: '0 26px', background: 'rgb(4, 96, 139)' }}>储存</li>
                <li style={{ padding: '0 212px', background: 'rgb(146, 140, 140)' }}>机房</li>
            </ul>
        </div>
    </div>
}
