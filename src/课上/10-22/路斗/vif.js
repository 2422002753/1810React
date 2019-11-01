// 表单验证
// 逻辑： 根据传进来的不同的类型判断不同的表单
// 比如 登录和注册是有区别的
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
      msg: "密码不能为空，且长度不小于6位"
    }
  },
  RPWD: {
    MINLEN: 0,
    MAXLEN: 6,
    ERR: {
      state: "err",
      msg: "两次密码不一致,请重新输入"
    }
  }
};
// 公共的判断函数
// 验证用户名
const vfusername = value => {
  if (value.length === DICT.USER.MINLEN || DICT.USER.MINLEN) {
    return DICT.USER.ERR.msg;
  }
  return {
    state: "success"
  };
};
// 验证密码
const vfpassword = value => {
  if (value.length === DICT.PWD.MINLEN || value.length < DICT.PWD.MAXLEN) {
    return DICT.PWD.ERR.msg;
  }
  return {
    state: "success"
  };
};

export const login = data => {
  // 根据传入的值去判断
  let user = vfusername(data.username);
  if (user.state !== "success") {
    return DICT.USER.ERR.msg;
  }
  let psw = vfpassword(data.password);
  if (psw.state !== "success") {
    return DICT.PWD.ERR.msg;
  }

  // 全部用过
  return null;
};
export const register = data => {
  // 根据传入的值去判断
  let user = vfusername(data.username);
  if (user.state !== "success") {
    return DICT.USER.ERR.msg;
  }
  let psw = vfpassword(data.password);
  if (psw.state !== "success") {
    return DICT.PWD.ERR.msg;
  }

  if (data.password !== data.rpassword) {
    return DICT.RPWD.ERR.msg;
  }
  // 全部用过
  return null;
};
