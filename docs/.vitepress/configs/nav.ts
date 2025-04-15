///docs/.vitepress/configs/nav.ts
// 导航栏
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '首页', link: '/' },
    { 
        text: '学习笔记',
        items: [
            {text: 'JAVA', link: '/guide/guide_java/index'},
            {text: 'Python', link: '/guide/guide_python/index'},
            {text: '算法', link: '/guide/guide_algorithm/index'},
            {text: '开发框架', link: '/guide/guide_backend_framework/index'},
            {text: '机器学习', link: '/guide/guide_ml/index'},
            {text: '项目实战', link: '/guide/guide_dl/index'},
        ] 
    },
    { 
        text: '面试宝典',
        items: [
            {text: '面试题库', link: '/interview/interview_list/index'},
            {text: '面试总结', link: '/interview/interview_summary/index'},
        ]
    },
    { 
        text: '技术杂烩',
        items: [
            {text: '后端开发', link: '/hodgepodge/backend/index'},
            {text: '前端开发', link: '/hodgepodge/frontend/index'},
            {text: '网站运维', link: '/hodgepodge/operations/index'},
        ] 
    },
    { text: '实践经验', link: '/practical_experience/index' },
    { text: '知识归档', link: '/archive/index' },
    { text: '科研记录', link: '/scientific_research/index' },
    {text: '人生杂谈', link: '/talklife/index'},
    {text: '关于我', link: '/about'},
]
