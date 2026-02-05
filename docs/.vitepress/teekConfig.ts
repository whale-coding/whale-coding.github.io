// 引入 Teek 主题的配置加载器
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
export const teekConfig = defineTeekConfig({
  teekHome: false, // 是否开启博客首页
  vpHome: true, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  author: { name: "鲸码小栈", link: "https://github.com/whale-coding" },   // 文章默认的作者信息
  // 页脚信息配置
  footerInfo: {
    // 页脚信息，支持 HTML 格式（位于主题版权上方）
    topMessage: ["所有文章版权皆归博主所有，仅供学习参考."],
    // 主题版权配置
    theme: {
      name: `Vitepress Theme Teek`,
      link: "https://vp.teek.top/",
    },
    // 博客版权配置
    copyright: {
      createYear: 2025,
      suffix: "鲸码小栈",
    },
    // ICP 备案信息配置
    icpRecord: {
      name: "皖ICP备2024052617号-1",
      link: "http://beian.miit.gov.cn/",
    }
  },
  // 代码块配置
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },
  // 文章页底部的最近更新栏配置
  articleUpdate: {
    enabled: true, // 是否启用文章最近更新栏
    limit: 3, // 文章最近更新栏显示数量
  },
  // 文章分享配置,开启文章链接分享功能
  articleShare: { enabled: true },
  // 评论配置，目前内置 Giscus、Twikoo、Waline、Artalk 四种评论插件
  comment: {
    provider: "twikoo", // 评论区提供者
    // 评论区配置项，根据 provider 不同而不同，具体看对应官网的使用介绍
    options: {
      // twikoo 配置，官网：https://twikoo.js.org/
      envId: "mongodb+srv://blog_njq:<db_password>@cluster0.xi4uecy.mongodb.net/?appName=Cluster0",
      
      // waline 配置，官网：https://waline.js.org/
      // serverURL: "your serverURL",
      // jsLink: "https://unpkg.com/@waline/client@v3/dist/waline.js",
      // cssLink: "https://unpkg.com/@waline/client@v3/dist/waline.css",

      // giscus 配置，官网：https://giscus.app/zh-CN
      // repo: "your name/your repo",
      // repoId: "your repoId",
      // category: "your category",
      // categoryId: "your categoryId",

      // artalk 配置，官网：https://artalk.js.org/
      // server: "your server",
      // site: "site",
    },
  },
  // Vite 插件配置
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
  },
});
