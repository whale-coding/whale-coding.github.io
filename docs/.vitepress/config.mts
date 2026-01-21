// config.mts vitpress的配置文件

// 默认的vitepress 配置文件
import { defineConfig } from 'vitepress'

// 主题配置导入
import {teekThemeConfig} from './teekConfig.ts'

// 导入Nav模块
import { Nav } from "./ConfigHyde/Nav"; 

const description = [
  "欢迎来到 vitepress-theme-teek 使用文档",
  "Teek 是一个基于 VitePress 构建的主题，是在默认主题的基础上进行拓展，支持 VitePress 的所有功能、配置",
  "Teek 拥有三种典型的知识管理形态：结构化、碎片化、体系化，可以轻松构建一个结构化知识库，适用个人博客、文档站、知识库等场景",
].toString();

// https://vitepress.dev/reference/site-config
// VitePress 配置
export default defineConfig({
  // 配置中通过 extends 可以将主题配置合并到 VitePress 配置里
  // 继承teek主题配置
  extends: teekThemeConfig,  // 使用 extends 合并主题配置

  // base: "./",
  /*全站配置*/
  title: "鲸码小栈",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [

  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      infoLabel: "信息",
      noteLabel: "笔记",
      tipLabel:  "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      detailsLabel: "详细信息",
      importantLabel: "重要",
      cautionLabel: "注意",
    },
  },

  /*Vite主题配置*/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.webp', //显示在导航栏中网站标题之前的徽标文件。接受路径字符串或对象来为亮/暗模式设置不同的徽标。
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",

    /* 导航栏配置 */    
    nav: Nav,
   
    /* 右侧大纲配置 */    
    outline: {
      level: [2, 4],  // 'deep'
      label: '目录导航'
    },
    /* 文档页脚 */
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    /* 社交账号链接 */
    socialLinks: [
      { icon: 'github', link: 'https://github.com/whale-coding' }
    ],
    /* 搜索配置 */
    search: {
      provider: 'local'
    },
    /* 页脚配置 */
    footer: { 
      // message: '所有文章版权皆归博主所有，仅供学习参考.',
      // copyright: 'Copyright © 2025-present whale-coding | 皖ICP备2024052617号-1'
    },
  }
})
