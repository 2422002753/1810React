import React from 'react';
import './index.css';
import Top from './top'
import Center from './center'
import Footer from './footer'

export default class Index extends React.Component {
    // React.Fragment 占位组件，他不会在页面中生成任何的元素
    render() {
        return <div className='wrap'>
            <Top/>
            <Center/>
            <Footer/>
        </div>
    }
}
