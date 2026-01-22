// nav导航栏配置

export const Nav = [
    { text: '🏡首页', link: '/' },
    { 
        text: '📚知识库',
        items: [
            {text: 'Java', link: '/Java',},
            {text: 'Goland', link: '/goland',},
            {text: '运维', link: '/ops', },
            {text: '前端', link: '/web', },
        ] 
    },
    { 
        text: '🤖AI',
        items: [
            {text: 'AI基础', link: '/ai_base',},
            {text: 'AI应用', link: '/ai_application', },
            {text: '大模型应用开发', link: '/ai_dev',},
        ]
    },
    { 
        text: '🍋算法',
        items: [
            {text: '算法基础', link: '/algorithm_base', },
            {text: 'Leetcode', link: '/algorithm_leetcode', },
        ]
    },
    { 
        text: '🏅八股',
        items: [
            {text: 'Java', link: '/interview_java', },
            {text: 'Goland', link: '/interview_goland',},
            {text: 'AI', link: '/interview_ai',},
        ]
    },
    { 
        text: '🏓项目',
        items: [
            {text: '随想听书', link: '/work_tingshu', },
        ]
    },
    { 
        text: '🎨随笔',
        items: [
            {text: '人生杂谈', link: '/talklife', },
            {text: '个人复盘', link: '/review', },
        ]
    },
    // {
    //     text: "🎨归档",
    //     items: [
    //       { text: "归档页", link: "/archives" },
    //       { text: "分类页", link: "/categories" },
    //       { text: "标签页", link: "/tags" },
    //     ]
    // },
    { text: "✨ 关于", link: "/personal" },
  ]
