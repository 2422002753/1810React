// 引入react
import React from 'react';
//引入UI框架的外部样式表
import 'antd/dist/antd.css';

import './index.css';
//引入组件
import Sider from './sider/index';
import Seach from './seach/seach';
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    // 动态给组件传值
    this.state = {
      home: '首页',
      new: '新闻',
      about: '关于',
      cont1: '产品',
      cont2: '画册',
      cout3: '记得双击',
      cont4: '热点',
      cont5: '咨询',
      cout6: '么么哒'
    };
  }
  //渲染
  render() {
    return (
      <div className="body">
          {/* 组件复用 */}
        {/*  将组件写入*/}
        <Sider
          siderlist={this.state.home}
          cont1={this.state.cont1}
          cont2={this.state.cont2}
          cont3={this.state.cont3}
        />
        <Sider
          siderlist={this.state.new}
          cont1={this.state.cont4}
          cont2={this.state.cont5}
          cont3={this.state.cont6}
        />
        <Sider siderlist={this.state.about} />
        {/* 搜索组件 */}
        <Seach />
      </div>
    );
  }
}
