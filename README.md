# 简介

### 1.项目架构

![image](https://github.com/chenzhengyin/multi-page-electron-project/blob/master/image/1.png)

#### 1.1 所了解的前端架构
##### 1.1.1 vue单页面工程
###### 介绍

	一个工程，所有页面均为一个单页面下的不同展示

###### 优缺点

	业务简单时使用比较方便，开发效率高；
	但业务如果复杂，多人协作开发和发布问题较多
##### 1.1.2 多vue单页面工程+Nginx代理
###### 介绍

	普通多个单页面工程，通过nginx代理为同一域名，各个工程之间可以比较便捷的进行数据共享

###### 优缺点

	多人协作互不干扰，拆分为多模块后业务复杂度降低；
	各模块之间公共资源复用性大大降低，前端开发需要本地配置nginx，成本较高
##### 1.1.3 vue多页面工程
###### 介绍

	一个工程中配置多个单页面，通过不同编译命令达到各单页面即可独立运行，又可整体发布的效果

###### 优缺点

	各单页面可独立发布，也可整体发布，工程中的公共资源共享，不需nginx即可达到各存储资源共享的效果，另外配合git多分支使用，多人协作效果较好;

	工程随着时间增长，里面涵盖的单页面应用可能会越来越多，整个项目开发时可能会臃肿（应该不影响运行和发布）

### 2.在`vue.config.js中配置编译模块，支持下列配置(不分先后顺序)
- ['index','module1']
- ['index','module2']
- ['index']
- ['module1']
- ['module2']

![image](https://github.com/chenzhengyin/multi-page-electron-project/blob/master/image/2.png)

### 3.支持编译命令

```
npm run serve
npm run build
```

```
npm run electron:build  //exe编译
npm run electron:serve  //exe调试
```



