// 表单的验证
// 逻辑：根据传进来的不同的类型判断不同的表单
// 比如登陆和注册是有区别的

// 公共常量字典
const DICT = {
  USER: {
    MINLEN: 0,
    MAXLEN: 2,
    ERR: {
      state: "err",
      msg: "用户名不能为空，且长度不小于2位"
    }
  },
  PWD: {
    MINLEN: 0,
    MAXLEN: 6,
    ERR: {
      state: "err",
      msg: "密码不许为空，且长度不小于6位"
    }
  }
};

// 公共的判断函数
const vfusername = value => {
  if (value.length === DICT.USER.MINLEN || value.length < DICT.USER.MAXLEN) {
    return DICT.USER.ERR;
  }
  return { state: "success" };
};
const vfpassword = value => {
  if (value.length === DICT.PWD.MINLEN || value.length < DICT.PWD.MAXLEN) {
    return DICT.PWD.ERR;
  }
  return { state: "success" };
};
export const login = data => {
  // 根据传入的值去判断
  let user = vfusername(data.username);
  if (user.state !== "success") {
    return user.msg;
  }
  let psw = vfpassword(data.password);
  if (psw.state !== "success") {
    return psw.msg;
  }
  // 全部通过
  return null;
};

export const register = (type, value) => {};
