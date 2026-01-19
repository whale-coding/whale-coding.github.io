// nav导航栏配置

export const Nav = [
    { text: '🏡首页', link: '/' },
    { 
        text: '📚后端开发',
        items: [
            {text: 'Java', link: '/blog_Java',},
            {text: 'Goland', link: '/blog_goland',},
            {text: '运维', link: '/blog_ops', },
            {text: '前端', link: '/blog_web', },
        ] 
    },
    { 
        text: '🛠️AI',
        items: [
            {text: 'Java', link: '/repository_java', },
            {text: '前端', link: '/repository_web', },
            {text: 'Goland', link: '/repository_goland',},
            {text: '运维', link: '/repository_ops', },
        ]
    },
    { 
        text: '🍋算法',
        items: [
            {text: '算法基础', link: '/algorithm_base', },
            {text: 'Leetcode100', link: '/algorithm_hot100', },
            {text: '算法题库', link: '/algorithm_store', },
        ]
    },
    { 
        text: '🏅八股',
        items: [
            {text: 'Java', link: '/interview_java', },
            {text: 'Goland', link: '/interview_goland',},
        ]
    },
    { 
        text: '🏓项目实战',
        items: [
            {text: '随想听书', link: '/talklife_write', },
            {text: '人生杂谈', link: '/talklife_insight', },
        ]
    },
    {
        text: "🎨归档",
        items: [
          { text: "归档页", link: "/archives" },
          { text: "分类页", link: "/categories" },
          { text: "标签页", link: "/tags" },
        ]
    },
    { text: "✨ 关于", link: "/personal" },

  ]