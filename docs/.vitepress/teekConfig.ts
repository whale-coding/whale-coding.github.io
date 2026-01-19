// 主题独有配置

// 引入 Teek 主题的配置加载器
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekThemeConfig = defineTeekConfig({
  // 配置 Teek 主题
  teekTheme: true,  // 启用 Teek 主题
  teekHome: false,  // 启用 Teek 主页
  vpHome: true,  // VitePress 主页
  loading: false, // 是否启用 Loading
  anchorScroll: true,  // 启用锚点滚动功能，即阅读文章时，自动将 h1 ~ h6 标题添加到地址栏 # 后面
  themeSize: "default",  // 站点尺寸，默认为 medium
  // 主题切换配置
  viewTransition: {
    enabled: true, // 是否启用深浅色切换动画效果
    mode: "out-in", // 动画模式，out 始终从点击点往全屏扩散，out-in 第一次从点击点往全屏扩散，再次点击从全屏回到点击点
    duration: 300, // 动画持续时间，当 mode 为 out 时，默认为 300ms，mode 为 out-in 时，默认为 600ms
    easing: "ease-in", // 缓动函数
  },
  // 回到顶部配置
  backTop: {
    enabled: true, // 是否启动回到顶部功能
    content: "icon", // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: TkMessage => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
  },
  // 滚动到评论区配置
  toComment: {
    enabled: true, // 是否启动滚动到评论区功能
    done: TkMessage => TkMessage.success("已抵达评论区"), // 滚动到评论区后的回调
  },
  // 代码块配置
  codeBlock: {
    enabled: true, // 是否启用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: false, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "none", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: TkMessage => TkMessage.success("复制成功！"), // 复制代码完成后的回调
  },
    // 主题增强配置，当开启后，右上角将有主题增强面板出现。
  themeEnhance: {
    enabled: false, // 启用主题增强功能
  },
  sidebarTrigger: true, // 是否启用侧边栏展开/折叠触发器，点击触发器可以展开/折叠侧边栏。
  windowTransition: true, // 是否全局给部分元素启用视图渐入过渡效果，当为 boolean 类型，则控制全局是否启用，当为 object 类型，则控制部分元素是否启用
  // 文章默认的作者信息
  author: {
    name: "鲸码小栈", // 作者名称
    link: "https://github.com/whale-coding", // 点击作者名称后跳转的链接
  },
  // 站点分析配置
  siteAnalytics: [
    { provider: "google", options: { id: "******" } },
    { provider: "baidu", options: { id: "******" } },
    { provider: "umami", options: { id: "******", src: "**" } },
  ],
  // 页脚配置
  footerInfo: {
    // 页脚信息，支持 HTML 格式（位于主题版权上方）
    topMessage: ["所有文章版权皆归博主所有，仅供学习参考."],
    // 主题版权配置
    theme: {
      show: true, // 是否显示主题版权，建议显示
      name: "Vitepress Theme Teek", // 自定义名称
      link: "https://vp.teek.top/", // 自定义链接
    },
    // 博客版权配置
    copyright: {
      show: true, // 是否显示博客版权
      createYear: 2024, // 创建年份
      suffix: "鲸码小栈", // 后缀
    },
    // ICP 备案信息配置
    icpRecord: {
      name: "皖ICP备2024052617号-1",
      link: "http://beian.miit.gov.cn/",
    }
  },
  // 单文章页 Banner 配置
  articleBanner: {
    enabled: true, // 是否启用单文章页 Banner
    showCategory: true, // 是否展示分类
    showTag: true, // 是否展示标签
    defaultCoverImg: "", // 默认封面图
    defaultCoverBgColor: "", // 默认封面背景色，优先级低于 defaultCoverImg
  },
  // 文章信息分析配置，分别作用在首页和文章页
  articleAnalyze: {
    showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    dateFormat: "yyyy-MM-dd", // 文章日期格式，首页和文章页解析日期时使用 "yyyy-MM-dd hh:mm:ss"
    showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: true, // 是否展示作者
    showCreateDate: true, // 是否展示创建日期
    showUpdateDate: false, // 是否展示更新日期，仅在文章页显示
    showCategory: false, // 是否展示分类
    showTag: false, // 是否展示标签
  },
  // 面包屑配置
  breadcrumb: {
    enabled: true, // 是否启用面包屑
    showCurrentName: false, // 面包屑最后一列是否显示当前文章的文件名
    separator: "/", // 面包屑分隔符
    homeLabel: "首页", // 鼠标悬停首页图标的提示文案
  },
  // 文章分享配置
  articleShare: {
    enabled: true, // 是否开启文章链接分享功能
    text: "分享此页面", // 分享按钮文本
    copiedText: "链接已复制", // 复制成功文本
    query: false, // 是否包含查询参数
    hash: false, // 是否包含哈希值
  },
  // 在每个文章页顶部显示 VitePress 容器添加提示，使用场景如添加文章版权声明。
  articleBottomTip: frontmatter => {
    if (typeof window === "undefined") return;

    const hash = false;
    const query = false;
    const { origin, pathname, search } = window.location;
    const url = `${origin}${frontmatter.permalink ?? pathname}${query ? search : ""}${hash ? location.hash : ""}`;
    const author = "鲸码小栈";

    return {
      type: "tip",
      // title: "声明", // 可选
      text: `<p>作者：${author}</p>
             <p style="margin-bottom: 0">链接：<a href="${decodeURIComponent(url)}" target="_blank">${decodeURIComponent(url)}</a></p>
             <p>版权：此文章版权归 ${author} 所有，如有转载，请注明出处!</p>
            `,
    };
  },
  // 文章页底部的最近更新栏配置
  articleUpdate: {
    enabled: false, // 是否启用文章最近更新栏
    limit: 3, // 文章最近更新栏显示数量
  },
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
  vitePlugins: {
    sidebar: true, // 是否启用 sidebar 插件
    sidebarOption: {}, // sidebar 插件配置项
    permalink: true, // 是否启用 permalink 插件
    permalinkOption: {}, // permalinks 插件配置项
    mdH1: true, // 是否启用 mdH1 插件
    catalogueOption: {}, // catalogues 插件配置项
    docAnalysis: true, // 是否启用 docAnalysis 插件
    docAnalysisOption: {}, // docAnalysis 插件配置项
    fileContentLoaderIgnore: [], // fileContentLoader 插件扫描 markdown 文档时，指定忽略路径，格式为 glob 表达式，如 **/test/**
    autoFrontmatter: true, // 是否启用 autoFrontmatter 插件
    // autoFrontmatter 插件配置项
    autoFrontmatterOption: {
      permalink: true, // 是否开启生成永久链接
      recoverTransform: false, // 是否开启同名 key 覆盖
      categories: true, // 是否开启自动生成 categories
      coverImg: false, // 是否开启添加文档封面图
      forceCoverImg: false, // 是否开启强制覆盖封面图
      coverImgList: [], // 封面图列表
      // 处理永久链接的规则
      permalinkRules: [
        //{ folderName: "01.指南/01.简介/", prefix: "/$path/$uuid", removeLevel: 99 }, // 添加前缀
      ],
    },
  },
  




  
});

export { teekThemeConfig };
