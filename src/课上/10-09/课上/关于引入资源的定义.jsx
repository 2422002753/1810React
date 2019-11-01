// 在import引入资源的时候，如果不加地址，那么该资源一定是全局安装的依赖，webpack会默认的从node_modules目录里加载
import React from "react";
// 加了路径的引用，一定是自己写的文件
import abc from "../App";

abc;
React;
