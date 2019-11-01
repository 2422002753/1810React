// import React from 'react';
import jsonp from 'jsonp';
let getBaidu = qre => {
  return new Promise((resolve, reject) => {
    jsonp(
      'http://suggestion.baidu.com/su?wd=' + qre,
      { param: 'cb' },
      (err, data) => {
        if (err) {
          reject(err);
          alert('网络错误');
        } else {
          resolve(data);
        }
      }
    );
  });
};
export default getBaidu;
