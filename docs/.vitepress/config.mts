import { defineConfig } from 'vitepress'
import { sidebar, nav, head} from './configs'  //导入自定义的配置
import markdownItTaskList from "markdown-it-task-lists";
import timeline from "vitepress-markdown-timeline";
import container from "markdown-it-container";
import attrs from "markdown-it-attrs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "代码鲸", //标题
  description: "个人技术知识体系矩阵", //描述
  lang: 'zh-CN', //语言类型
  lastUpdated: true, //最近更新时间
  cleanUrls: true, //VitePress 将从 URL 中删除尾随.html
  base: '/', //默认情况下，我们假设站点将部署在域的根路径 ( /) 中。 如果您使用 Github（或 GitLab）Pages 并部署到user.github.io/repo/，则将您的设置base为/repo/
  head: head, // 使用导入的 head 配置
  /* markdown 配置 */
  markdown: {
    lineNumbers: true,  //代码块显示行号
    config: (md) => {
      md.use(markdownItTaskList)        // 任务列表
      md.use(timeline)                  // 时间轴
      md.use(container, "tip")   // 自定义容器（如提示框）
      md.use(attrs)                     // 让 Markdown 支持 HTML 属性
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
  },
  /* 主题配置 */
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png', //显示在导航栏中网站标题之前的徽标文件。接受路径字符串或对象来为亮/暗模式设置不同的徽标。
    
    // 设置导航栏
    nav,
    sidebar,
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    // sidebar: [],
    
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录导航'
    },
    docFooter: {
      //文档页脚
      prev: '上一篇',
      next: '下一篇'
    },
    // 社交账号链接
    socialLinks: [
      //显示带有图标的社交帐户链接
      { icon: 'github', link: 'https://github.com/whale-coding' }
    ],
    // 小设置
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    lastUpdatedText: '上次更新', //上次更新文案

    // 本地搜索
    search: {
      provider: 'local'
    },
    //页脚
    footer: { 
      message: '所有文章版权皆归博主所有，仅供学习参考.',
      copyright: 'Copyright © 2025-present whale-coding | 皖ICP备2024052617号-1'
    },
  }
})
