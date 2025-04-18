# 基于VitePress快速搭建个人博客

## 1、可参考的资料

https://lyxdream.github.io/tool-kit/note/

https://vitepress.dev/

https://github.com/ZbWeR/easy-vitepress-blog/tree/master

https://github.com/Justin3go/justin3go.com

https://github.com/01Petard/blog-vue-vitepress

https://segmentfault.com/a/1190000044948735

https://developer.aliyun.com/article/1614920

https://vitepress-theme-async.imalun.com/guide/config

## 2、大佬博客参考

代码港湾：https://01petard.github.io/blog-vue-vitepress/

前端成长指引：https://lyxdream.github.io/

Justin3go：https://justin3go.com/

SJDocs:https://issunjian.github.io/docs/

正心全栈编程：https://notes.zhengxinonly.com/

查尔斯的知识库：https://blog.charles7c.top/

## 3、安装和搭建 vitepress

1、初始化一个文件夹

```
  mkdir vitepress-project      // 创建文件夹
  cd  vitepress-project        // 进入文件夹
  npm init                     // 初始文件夹
```

2、安装 `vitepress` 和 相关依赖 `vue`

```
npm install -D vitepress vue
```

3、运行 vitepress

```
npm run docs:dev
```

4、打包

```
npm run docs:build
```

## 4、个人博客工程结构

为了方便参考，这里列出我博客的工程目录。

```
whale-coding.github.io
├─.github           # github配置
│  └─workflows      # 自动构建部署配置
├─docs              # 博客内容
│   ├─.vitepress    
│   │  ├─config.mts  # vitepress配置
│   │  ├─configs     # 配置
│		│  │	├─index.ts    # index
│   │  │  ├─head.ts     # 头相关配置
│		│	 │	├─nav.ts      # 导航栏配置
│		│	 │	├─sidebar.ts  # 侧边栏配置
│   │  └─theme      # 样式和主题
│   ├─index.md      # 博客首页
│   ├─about.md      # 关于我
│   ├─...           # 更多博客目录
│   └─public        # 博客使用的静态资源
├─.gitignore        # git提交忽略配置
├─package.json      # node.js配置
├─package-lock.json    # 依赖的锁定版本号
└─README.md         # 工程说明
```

