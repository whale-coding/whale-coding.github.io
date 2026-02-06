// nav导航栏配置

export const Nav = [
    { text: "🏡首页", link: "/" },
    { 
        text: '📚Java',
        items: [
            {text: '知识库', link: '/java/guide', activeMatch: "/10.Java-知识库/" },
            {text: '八股文', link: '/java/interview', activeMatch: "/11.Java-八股/"  },
        ]
    },
    { 
        text: '🏅Goland',
        items: [
            {text: '知识库', link: '/goland/guide', activeMatch: "/15.Goland-知识库/" },
            {text: '八股文', link: '/goland/interview', activeMatch: "/16.Goland-八股/"  },
        ]
    },
    { 
        text: '🤖AI',
        items: [
            {text: '知识库', link: '/ai/guide', activeMatch: "/20.AI-知识库/" },
            {text: '八股文', link: '/ai/interview', activeMatch: "/21.AI-八股/"  },
        ]
    },

    // { text: "配置", link: "/reference/config", activeMatch: "/10.配置/" },
    { text: "🐲算法", link: "/algorithm/intro", activeMatch: "/30.算法/" },
    { text: "💻开发", link: "/develop/git_use", activeMatch: "/40.开发/" },
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
        text: '🎨随笔',
        items: [
            {text: '人生杂谈', link: '/life/talklife', activeMatch: "/50.随笔-人生杂谈/" },
            {text: '个人复盘', link: '/life/review', activeMatch: "/50.随笔-个人复盘/"  },
        ]
    },
    // { text: "✨ 关于我", link: "/personal/" },
]
