# 开篇为王者荣耀前后端项目规划

@[TOC](文章目录)

</font>

<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">

# 前言

<font color=#999AAA >本项目用于个人实践前后端开发，联调，配合，希望我的文章能带领你喜欢上代码，喜欢上前端。本文章只是开篇规划。后续还会对项目的规划的划分模块进行详细续写</font>

<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">

# 一、技术栈

王者荣耀手机端：uniapp+VueJs+ElementUI+Vue-cli
王者荣耀后端可视化管理系统：VueJs+ElementUI+Vue-cli
王者荣耀后端：NodeJS+Express+MongoDB+mongoose

# 二、项目规划

## 1.入门

1.初始化项目（Vue-cli）

## 2.管理后台

1.基于 ElementUI 的后台管理页面 2.创建分类 3.分类列表 4.修改分类 5.删除分类 6.通用 CRUD 接口(create read update delete) 7.装备管理 8.图片上传和文件管理(multer) 9.英雄管理 10.编辑英雄 11.装备的多选(el-select, multiple) 12.技能的编辑 13.文章的管理 14.富文本编辑器 15.首页广告管理 16.管理员账号管理 17.登录页面 18.登录接口(jwt：jsonwebtoken) 19.服务端登录鉴权 20.客户端路由器限制(Vue 自带的路由守卫 和 meta 字段)

## 3.移动端网站

1.开发服务端接口 2.考虑整体样式 3.使用字体图标（iconfont） 4.首页顶部轮播图片（swiper） 5.考虑通用组件（封装） 6.靠骗组件 7.菜单组件 8.首页新闻详情页 9.新闻详情页 10.首页英雄列表 11.英雄详情页

## 4.发布和部署(腾讯云)

1.生产环境编译 2.购买域名和服务器 3.域名解析
4.Nginx 安装和配置
5.MongoDB 数据库的安装和配置
6.git 安装·配置 ssh-key
7.NodeJs 安装、升级、配置淘宝镜像 8.拉取代码、安装 pm2 并启动项目 9.配置 Nginx 的反向代理

## 5.进阶

1.使用免费 SSL 证书启动 HTTPS 安全连接 2.使用腾讯云 OSS 云存储放上传文件

# 总结

本项目，让本人受益良多，对 js 对 VueJs ，对 NodeJs 的常用操作，对前后端交互，联调 熟练运用。
