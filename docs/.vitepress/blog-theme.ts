// 主题独有配置


// 引入 Teek 主题的配置加载器
import { defineTeekConfig } from "vitepress-theme-teek/config";


// Teek 主题配置
const blogThemeConfig = defineTeekConfig({
  // 配置 Teek 主题
  teekTheme: true,  // 启用 Teek 主题
  teekHome: true,  // 启用 Teek 主页
  vpHome: false,  // 禁用 VitePress 主页
  loading: "正在加载中...", // 修改 Loading 文案
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
    enabled: false, // 是否启用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: false, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "none", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: TkMessage => TkMessage.success("复制成功！"), // 复制代码完成后的回调
  },
  sidebarTrigger: true, // 是否启用侧边栏展开/折叠触发器，点击触发器可以展开/折叠侧边栏。
  windowTransition: true, // 是否全局给部分元素启用视图渐入过渡效果，当为 boolean 类型，则控制全局是否启用，当为 object 类型，则控制部分元素是否启用
  // body 背景图片配置，将整个网站的背景色改为图片。
  // bodyBgImg: {
  //   imgSrc: ["/blog/bg1.webp"], // body 背景图片链接。单张图片 string | 多张图片 string[], 多张图片时每隔 imgInterval 秒换一张
  //   imgOpacity: 1, // body 背景图透明度，选值 0.1 ~ 1.0
  //   imgInterval: 15000, //  body 当多张背景图时（imgSrc 为数组），设置切换时间，单位：毫秒
  //   imgShuffle: false, // body 背景图是否随机切换，为 false 时按顺序切换
  //   mask: false, // body 背景图遮罩
  //   maskBg: "rgba(0, 0, 0, 0.2)", // body 背景图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。mask 为 true 时生效
  // },
  // 主题增强配置，当开启后，右上角将有主题增强面板出现。
  themeEnhance: {
    enabled: true, // 启用主题增强功能
    position: "top", // 位置，top 为导航栏右侧，bottom 为右下角
    // 布局切换配置
    layoutSwitch: {
      disabled: true, // 禁用布局切换
      defaultMode: "original", // 布局切换的默认模式
      disableHelp: false, // 禁用帮助提示
      disableAnimation: false, // 禁用布局切换动画
      defaultDocMaxWidth: 90, // 内容布局最大宽度的默认百分比，仅限 0-100
      disableDocMaxWidthHelp: false, // 禁用帮助提示
      defaultPageMaxWidth: 95, // 页面布局最大宽度的默认百分比，仅限 0-100
      disablePageMaxWidthHelp: false, // 禁用帮助提示
    },
    // 布局主题色配置
    themeColor: {
      disabled: false, // 禁用布局主题色切换
      defaultColorName: "ep-blue", // 布局默认主题色
      defaultSpread: false, // 是否将主题色扩散到其他元素（根据主题色计算其他元素需要的颜色）
      disableHelp: true, // 禁用帮助提示
      disabledInMobile: false, // 是否在移动端禁用
    },
    // 聚光灯配置
    spotlight: {
      disabled: true, // 禁用聚光灯
      defaultStyle: "aside", //  聚光灯默认样式
      disableHelp: false, // 禁用帮助提示
      defaultValue: true, // 聚光灯默认开关状态
    },
  },
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
  // 首页 Banner 配置，位于首页顶部
  banner: {
    enabled: true, // 是否启用 Banner
    name: "鲸码小栈", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "partImg", // 控制首页图的大小和图片的，Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    pureBgColor: "#28282d", // Banner 背景色，bgStyle 为 pure 时生效
    imgSrc: ["/blog-bg/bg1.webp","/blog-bg/bg3.webp"], // Banner 图片链接。bgStyle 为 partImg 或 fullImg 时生效
    imgInterval: 15000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
    imgWaves: true, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
    mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
    ], // 描述信息
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
    features: [{ title: "", details: "", link: "", image: "" }], // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
    featureCarousel: 4000, // feature 轮播间隔时间，单位：毫秒。仅在移动端生效（屏幕小于 719px）
  },
  // 壁纸模式，在首页 最顶部 进入全屏后开启，仅当 banner.bgStyle = 'fullImg' 或 bodyBgImg.imgSrc 存在才生效。
  wallpaper: {
    enabled: false, // 是否启用壁纸模式
    hideBanner: false, // 开启壁纸模式后，是否隐藏 Banner
    hideMask: false, // 开启壁纸模式后，是否隐藏 Banner 或 bodyBgImage 的遮罩层，则确保 banner.mask 和 bodyBgImage.mask 为 true 才生效
  },
  // 文章页的样式风格，default 为 VitePress 原生风格，card 为单卡片风格，segment 为片段卡片风格，card-nav 和 segment-nav 会额外修改导航栏样式。
  pageStyle: "card",
  // 文章列表配置（重要！）
  post: {
    postStyle: "list", // 文章模板风格，"list" 为列表风格，"card" 为卡片风格
    excerptPosition: "top", // 文章摘要位置
    showMore: true, // 是否显示更多按钮
    moreLabel: "阅读全文 >", // 更多按钮文字
    emptyLabel: "暂无文章", // 文章列表为空时的标签
    coverImgMode: "default", // 文章封面图模式  "default"  "full"
    showCapture: false, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
    splitSeparator: false, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
    transition: true, // 是否开启过渡动画
    transitionName: "tk-slide-fade", // 自定义过渡动画名称
    listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
    cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
    defaultCoverImg: [], // 默认封面图地址，如果不设置封面图则使用默认封面图地址
  },
  // 首页 Post 文章列表的分页配置
  page: {
    disabled: false, // 是否禁用
    pageSize: 20, // 每页显示条目数
    pagerCount: 7, // 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
    layout: "prev, pager, next, jumper, ->, total", // 组件布局，子组件名用逗号分隔
    size: "default", // 分页大小
    background: true, // 是否为分页按钮添加背景色
    hideOnSinglePage: false, // 只有一页时是否隐藏
    // ...
  },
  // 首页卡片栏列表位置
  homeCardListPosition: "right",
  // 首页卡片的位置排序
  homeCardSort: ["topArticle", "category", "tag", "friendLink", "docAnalysis"],
  // 博主信息，显示在首页左边第一个卡片
  blogger: {
    name: "鲸码小栈", // 博主昵称
    slogan: "做自己喜欢的事 无愧于心无悔于生", // 博主签名
    avatar: "/logo.webp", // 博主头像
    shape: "circle", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
    // circleBgImg: "/blog-bg/bg1.webp", // 背景图片
    circleBgMask: true, // 遮罩层是否显示，仅当 shape 为 circle 且 circleBgImg 配置时有效
    circleSize: 100, // 头像大小
    color: "#0a0a0aff", // 字体颜色
    // 状态，仅当 shape 为 circle 相关值时有效
    // status: {
    //   icon: "😪", // 状态图标
    //   size: 24, // 图标大小
    //   title: "困", // 鼠标悬停图标的提示语
    // },
  },
  // 精选文章卡片配置

  // 分类卡片配置

  // 标签卡片配置

  // 友情链接卡片配置
  friendLink: {
    enabled: false, // 是否启用友情链接卡片
  },
  // 站点信息卡片配置
  docAnalysis: {
    enabled: true, // 是否启用站点信息卡片
    createTime: "2024-10-19", // 站点创建时间
    wordCount: true, // 是否开启文章页的字数统计
    readingTime: true, // 是否开启文章页的阅读时长统计
    // 访问量、访客数统计配置
    statistics: {
      provider: "busuanzi", // 网站流量统计提供商
      siteView: true, // 是否开启首页的访问量和排名统计
      pageView: true, // 是否开启文章页的浏览量统计
      tryRequest: false, // 如果请求网站流量统计接口失败，是否重试
      tryCount: 5, // 重试次数，仅当 tryRequest 为 true 时有效
      tryIterationTime: 2000, // 重试间隔时间，单位：毫秒，仅当 tryRequest 为 true 时有效
      permalink: true, // 是否只统计永久链接的浏览量，如果为 false，则统计 VitePress 默认的文档目录链接
    },
    // 自定义额外信息
    appendInfo: [{ key: "index", label: "站点作者", value: "鲸码小栈" }],
  },
  // 社交信息配置

  // 页脚信息组配置

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
    },
    // 网络安全备案信息配置
    // securityRecord: {
    //   name: "备案",
    //   link: "http://beian.miit.gov.cn/",
    // },
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
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
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
    enabled: true, // 是否启用文章最近更新栏
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

export { blogThemeConfig };
