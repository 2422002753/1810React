// jsonp:安装命令： cnpm i -S jsonp
// 参数：三个：第一个url地址；第二个请求参数；第三个回调函数；
// 第二个参数里使用param定义回调函数
// 第三个参数回调函数里有两个参，第一个是请求失败，第二个是请求成功
import jsonp from "jsonp";
let getBaidu = qure => {
  // promise里接收一个回调函数，这个回调函数就是一个同步的方法；
  // 在这个回调函数里的resolve和reject才是真正的异步方法；
  var p = new Promise((resolve, reject) => {
    jsonp(
      "http://suggestion.baidu.com/su?wd=" + qure,
      { param: "cb" },
      (err, data) => {
        if (err) {
          reject(err);
          alert("网路错误，稍后重试！");
        } else {
          resolve(data);
        }
      }
    );
  });
  return p;
};
export default getBaidu;
