// 引入 Teek 主题的配置加载器
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
export const teekConfig = defineTeekConfig({
  teekHome: false, // 是否开启博客首页
  vpHome: true, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  author: { name: "鲸码小栈", link: "https://github.com/whale-coding" },   // 文章默认的作者信息
  // 主题增强配置，当开启后，右上角将有主题增强面板出现。
  themeEnhance: {
    enabled: true, // 启用主题增强功能
    // 布局切换配置
    layoutSwitch: {
      disabled: false, // 禁用布局切换
      defaultMode: "original", // 布局切换的默认模式
      disableHelp: false, // 禁用帮助提示
      disableAnimation: false, // 禁用布局切换动画
      defaultDocMaxWidth: 95, // 内容布局最大宽度的默认百分比，仅限 0-100
      disableDocMaxWidthHelp: false, // 禁用帮助提示
      defaultPageMaxWidth: 92, // 页面布局最大宽度的默认百分比，仅限 0-100
      disablePageMaxWidthHelp: false, // 禁用帮助提示
    },
    // 布局主题色配置
    themeColor: {
      disabled: false, // 禁用布局主题色切换
      defaultColorName: "ep-blue", // 布局默认主题色
      defaultSpread: false, // 是否将主题色扩散到其他元素（根据主题色计算其他元素需要的颜色）
      disableHelp: false, // 禁用帮助提示
      disabledInMobile: false, // 是否在移动端禁用
    },
    // 聚光灯配置
    spotlight: {
      disabled: false, // 禁用聚光灯
      defaultStyle: "aside", //  聚光灯默认样式
      disableHelp: false, // 禁用帮助提示
      defaultValue: true, // 聚光灯默认开关状态
    },
  },
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
    provider: "giscus", // 评论区提供者
    // 评论区配置项，根据 provider 不同而不同，具体看对应官网的使用介绍
    options: {
      // giscus 配置，官网：https://giscus.app/zh-CN
      repo: "whale-coding/whale-coding.github.io",
      repoId: "R_kgDOL_pUMw",
      category: "Q&A",
      categoryId: "DIC_kwDOL_pUM84C16k_",
    },
  },
  // Vite 插件配置
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
  },
});
