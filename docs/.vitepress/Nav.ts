// nav导航栏配置

export const Nav = [
    { text: "🏡首页", link: "/" },
    { 
        text: '📚知识库',
        items: [
            {text: 'Java', link: '/guide/java', activeMatch: "/10.知识库-Java/" },
            {text: 'Goland', link: '/guide/goland', activeMatch: "/11.知识库-Goland/" },
            {text: '运维', link: '/guide/ops', activeMatch: "/12.知识库-运维/" },
            {text: '前端', link: '/guide/frontend', activeMatch: "/13.知识库-前端/" },
        ]
    },
    { 
        text: '🤖AI',
        link: "/ai/quickstart",
        activeMatch: "/20.AI/",
    },

    // { text: "配置", link: "/reference/config", activeMatch: "/10.配置/" },
    { text: "💻开发", link: "/develop/intro", activeMatch: "/30.开发/" },
    { text: "🐲算法", link: "/algorithm/intro", activeMatch: "/40.算法/" },
    // {
    //     text: "功能页",
    //     items: [
    //         { text: "归档页", link: "/archives" },
    //         { text: "清单页", link: "/articleOverview" },
    //         { text: "登录页", link: "/login" },
    //         { text: "分类页", link: "/categories" },
    //         { text: "标签页", link: "/tags" },
    //     ],
    // },
    { 
        text: '🏅八股',
        items: [
            {text: 'Java八股', link: '/interview/java', activeMatch: "/50.八股-Java/" },
            {text: 'Goland八股', link: '/interview/goland', activeMatch: "/51.八股-Goland/" },
            {text: 'AI八股', link: '/interview/ai', activeMatch: "/52.八股-AI/" },
        ]
    },
    { 
        text: '🎨随笔',
        items: [
            {text: '人生杂谈', link: '/life/talklife', activeMatch: "/60.随笔-人生杂谈/" },
            {text: '个人复盘', link: '/life/review', activeMatch: "/60.随笔-个人复盘/"  },
        ]
    },
    { text: "✨ 关于我", link: "/personal/" },
]
