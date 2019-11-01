import React, { Component } from 'react';
import './index.css';
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      sex: '男',
      phone: '',
      email: '',
      file: '',
      post: '',
      resume: '',
      hobby: [
        { name: '写代码', state: false },
        { name: '解决bug', state: false },
        { name: '加班', state: false }
      ],
      location: ''
    };
  }
  handleChange = ({ target }) => {
    const {name,value} = target;
    let lastname='';
    if (name==='hobby') {
        lastname=[...this.state.hobby];
        lastname[value].state=!lastname[value].state
    }
    this.setState({
        [name]:name==='hobby'?lastname:value
    });
  };
  render() {
    const { username, sex, phone, email, file, post, resume, hobby, location } = this.state;
    return (
      <div className="boby">
        <form>
          <label>
            <span>姓名:</span>
            <input
              type="text"
              value={username}
              name="username"
              onChange={this.handleChange}
              placeholder="请输入姓名"
            />
          </label>
          <label>
            <span>性别:</span>
            <input
              className="radio"
              type="radio"
              name='sex'
              value="男"
              checked={sex==='男'}
              onChange={this.handleChange}
            />
            <span className="sex">男</span>
            <input
              className="radio"
              type="radio"
              name='sex'
              value="女"
              checked={sex==='女'}
              onChange={this.handleChange}
            />
            <span className="sex">女</span>
          </label>
          <label>
            <span>电话:</span>
            <input
              type="text"
              name="phone"
              value={phone}
              placeholder="请输入你的电话"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span>邮箱:</span>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="请输入你的邮箱"
            />
          </label>
          <label>
            <span>上传头像</span>
            <input type="text" disabled className="disfile" />
            <label id='put'>
                <img src={require('./shang.png')} alt=""/>
            </label>
            <input
              className="file"
              type="file"
              name="file"
              value={file}
              id='put'
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span>职位:</span>
            <input
              type="text"
              name="post"
              value={post}
              onChange={this.handleChange}
              placeholder="请输入你的职位"
            />
          </label>
          <label>
            <span>个人简历:</span>
            <textarea
              name="resume"
              value={resume}
              onChange={this.handleChange}
              cols="69"
              rows="5"
            ></textarea>
          </label>
          <label className="lick">
            <span>爱好:</span>

            {hobby.map((item, index) => {
              return (
                <label key={index}>
                  <input
                    className="check"
                    type="checkbox"
                    name="hobby"
                    value={index}
                    onChange={this.handleChange}
                  />
                  {item.name}
                </label>
              );
            })}
          </label>
          <label>
            <span>所在地:</span>
            <select
              className="location"
              name="location"
              value={location}
              onChange={this.handleChange}
            >
              <option value="北京市">北京市</option>
              <option value="天津市">天津市</option>
              <option value="河北省">河北省</option>
              <option value="河南省">河南省</option>
            </select>
            <select
              className="location"
              name="location"
              value={location}
              onChange={this.handleChange}
            >
              <option value="北京市市辖区">北京市市辖区</option>
              <option value="天津市市辖区">天津市市辖区</option>
              <option value="河北市市辖区">河北市市辖区</option>
              <option value="河南市市辖区">河南市市辖区</option>
            </select>
            <select
              className="location"
              name="location"
              value={location}
              onChange={this.handleChange}
            >
              <option value="北京市">昌平区</option>
              <option value="天津市">北辰区</option>
              <option value="衡水市">深州市</option>
              <option value="河南">驻马店</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
