import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
const text1 = (
  <ul>
    <li>
      <p style={{ fontSize: "20px", fontWeight: '700' }}>1.基本知识</p>
      <p>
        HTML 指的是超文本标记语言: HyperText Markup Language
        <br />
        HTML 标记标签通常被称为 HTML 标签 (HTML tag)
        <br />
        HTML 元素包含了开始标签与结束标签，元素的内容是开始标签与结束标签之间的内容，元素属性是 HTML 元素提供的附加信息。
      </p>
    </li>
    <li>
      <p style={{ fontSize: "20px", fontWeight: '700' }}>2.  数组方法</p>
      concat() 连接两个或更多的数组，并返回结果。<br />
      copyWithin() 从数组的指定位置拷贝元素到数组的另一个指定位置中。 <br />
      entries()返回数组的可迭代对象。 <br />
      every() 检测数值元素的每个元素是否都符合条件。<br />
      fill() 使用一个固定值来填充数组。 <br />
      filter()检测数值元素，并返回符合条件所有元素的数组。 <br />
      find()返回符合传入测试（函数）条件的数组元素。 <br />
      findIndex()返回符合传入测试（函数）条件的数组元素索引。 <br />
      forEach()数组每个元素都执行一次回调函数。 <br />
      from() 通过给定的对象中创建一个数组。<br />
      includes() 判断一个数组是否包含一个指定的值。 <br />
      indexOf()搜索数组中的元素，并返回它所在的位置。 <br />
      isArray() 判断对象是否为数组。<br />
      join() 把数组的所有元素放入一个字符串。<br />
      keys()返回数组的可迭代对象，包含原始数组的键(key)。<br />
      lastIndexOf()返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。<br />
      map() 通过指定函数处理数组的每个元素，并返回处理后的数组。<br />
      pop()删除数组的最后一个元素并返回删除的元素。 <br />
      push()向数组的末尾添加一个或更多元素，并返回新的长度。<br />
      reduce()[rɪˈdu:s]将数组元素计算为一个值（从左到右）。 <br />
      reduceRight()将数组元素计算为一个值（从右到左）。<br />
      reverse() 反转数组的元素顺序。<br />
      shift() 删除并返回数组的第一个元素。 <br />
      slice()选取数组的的一部分，并返回一个新数组。<br />
      some()[sʌm]检测数组元素中是否有元素符合指定条件。<br />
      sort() 对数组的元素进行排序。<br />
      splice() 从数组中添加或删除元素。<br />
      toString()把数组转换为字符串，并返回结果。<br />
      unshift()向数组的开头添加一个或更多元素，并返回新的长度。<br />
      valueOf()返回数组对象的原始值。<br />
    </li>
    <li>
      <p style={{ fontSize: "20px", fontWeight: '700' }}>3. 	Math 对象方法</p>
      abs(x)	返回 x 的绝对值。<br />
      acos(x)	返回 x 的反余弦值。<br />
      asin(x)	返回 x 的反正弦值。<br />
      atan(x)	以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。<br />
      atan2(y,x)	返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。<br />
      ceil(x)	对数进行上舍入。<br />
      cos(x)	返回数的余弦。<br />
      exp(x)	返回 Ex 的指数。<br />
      floor(x)	对 x 进行下舍入。<br />
      log(x)	返回数的自然对数（底为e）。<br />
      max(x,y,z,...,n)	返回 x,y,z,...,n 中的最高值。<br />
      min(x,y,z,...,n)	返回 x,y,z,...,n中的最低值。<br />
      pow(x,y)	返回 x 的 y 次幂。<br />
      random()	返回 0 ~ 1 之间的随机数。<br />
      round(x)	四舍五入。<br />
      sin(x)	返回数的正弦。<br />
      sqrt(x)	返回数的平方根。<br />
      tan(x)	返回角的正切。<br />
      abs(x)	返回 x 的绝对值。<br />
      acos(x)	返回 x 的反余弦值。<br />
      asin(x)	返回 x 的反正弦值。<br />
      atan(x)	以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。<br />
      atan2(y,x)	返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。<br />
      ceil(x)	对数进行上舍入。<br />
      cos(x)	返回数的余弦。<br />
      exp(x)	返回 Ex 的指数。<br />
      floor(x)	对 x 进行下舍入。<br />
      log(x)	返回数的自然对数（底为e）。<br />
      max(x,y,z,...,n)	返回 x,y,z,...,n 中的最高值。<br />
      min(x,y,z,...,n)	返回 x,y,z,...,n中的最低值。<br />
      pow(x,y)	返回 x 的 y 次幂。<br />
      random()	返回 0 ~ 1 之间的随机数。<br />
      round(x)	四舍五入。<br />
      sin(x)	返回数的正弦。<br />
      sqrt(x)	返回数的平方根。<br />
      tan(x)	返回角的正切。<br />

    </li>
  </ul>
);
const text2 = (
  <ul>
    <li>
      <p style={{ fontSize: "20px", fontWeight: '700' }}>1.BOM: Browser Object Model</p>
      什么是: 专门操作浏览器窗口的API
  没有标准, 导致浏览器兼容性问题
  包括:
  window
  history
  location
  navigator
  dom
  event
  screen
    </li>
    <li>
      <p style={{ fontSize: "20px", fontWeight: '700' }}>2.window:</p>
      属性: .innerWidth, .innerHeight 浏览器窗口中，文档显示区的宽和高<br />
      方法: .open() .close() .open("url","name")<br />
      三种:<br />
      1.在当前窗口打开，可后退: .open("url","_self")<br />
      2.在新窗口打开，可打开多个: .open("url","_blank")<br />
      3.在新窗口打开，只能打开一个:.open("url","自定义窗口名")<br />
    </li>
    <li>
      <p style={{ fontSize: "20px", fontWeight: '700' }}>3.history: 保存当前窗口打开后，成功访问过的url的历史记录栈</p>
      在当前窗口中，每访问一个新url，都会将新url压入historyAPI: history.go(n)<br />
      3种:<br />
      前进: history.go(1)  <br />
      后退: history.go(-1)  <br />
      刷新: history.go(0)<br />
    </li>
    <li>
      <p style={{ fontSize: "20px", fontWeight: '700' }}>4.location: 保存当前窗口正在打开的url的对象</p>
      属性: <br />
      .href 完整url地址<br />
      .protocol 协议<br />
      .host 主机名+端口号<br />
      .hostname 主机名<br />
      .port 端口号<br />
      .pathname 相对路径<br />
      .hash #锚点地址<br />
      .search ?查询字符串<br />
      方法:<br />
      在当前窗口打开，可后退:
location.assign(url) => location.href=url => location=url<br />
      在当前窗口打开，禁止后退:
location.replace(url)<br />
      重新加载页面: 刷新: 2种:
      普通刷新:
      优先从浏览器本地缓冲获取资源:
      F5
      history.go(0)
      location.reload(/false/)
      强制刷新:
      无论本地是否有缓存，总是强制从服务器获取资源
      location.reload(true)
    </li>
    <li>
      <p style={{ fontSize: "20px", fontWeight: '700' }}>5.定时器: 2种:</p>
      周期性定时器:<br />
      什么是: 让程序每隔指定的时间间隔，反复执行一项任务
何时: 只要让程序按照指定的时间间隔，自动执行一项任务<br />
      如何: 3件事:<br />
      1.任务函数: 让定时器反复执行的任务<br />
      2.启动定时器: timer=setInterval(task, interval)让程序，每隔interval 毫秒自动执行一次task任务<br />
      3.停止定时器: clearInterval(timer)<br />
      timer: 定时器的序号, 在内存中唯一标识定时器的整数专门用于停止定时器<br />
      如何获得: 只能在启动定时器时获得。
      何时: 只要一个定时器可能被停止，就要在启动时，先保存定时器序号
      好的习惯: 在clearInterval之后，手动清除timer中残留的序号: timer=null;
停止定时器: 2种情况:<br />
      用户手动停止:<br />
      定时器可自动停止: <br />
      在任务函数中，设定临界值，如果没有达到临界值，则继续执行任务，否则，如果达到临界值，就自动调用clearInterval<br />
      2.一次性定时器: <br />
      什么是: 让程序先等待一段时间，再执行一次任务。执行后，自动停止。
      何时: 只要让程序延迟执行一件事时
      如何: 3件事:
1.task<br />
      2.启动定时器: timer=setTimeout(task,wait)
让程序等待wait毫秒后，自动执行一次task，执行后自动停止<br />
      3.停止定时器: clearTimeout(timer)<br />
    </li>
  </ul>
);
export default class Index extends React.Component {
  render() {
    return (
      <div style={{ width: "1000px", margin: "auto", fontSize: '25px', fontWeight: '700' }}>
        <Collapse bordered={false} defaultActiveKey={["1"]}>
          <Panel header="HTML基础知识点总结" key="1">
            {text1}
          </Panel>
          <Panel header="CSS3基本知识点总结" key="2">
            {text2}
          </Panel>
        </Collapse>
      </div>
    );
  }
}
