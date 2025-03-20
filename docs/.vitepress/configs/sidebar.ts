///docs/.vitepress/configs/sidebar.ts
//侧边栏
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/guide/': [
        {
            text: '个人学习笔记',
            collapsed: false,
            items: [
                {
                    text: 'index11111',
                    link: '/webrtc/index'
                }
            ]
        }
    ],
    '/interview/': [
        {
            text: '面试宝典',
            items: [
                { text: '面试题', link: '/vscode-plugin/index' },  // 单个
                // 嵌套
                {
                    text: 'JAVA基础',
                    collapsed: false,  // 不折叠
                    items: [
                        {text: "My Java Guide - 计算机基础", link: "/开发/My Java Guide/My Java Guide - 计算机基础"},
                        {text: "My Java Guide - Java基础", link: "/开发/My Java Guide/My Java Guide - Java基础"},
                        {text: "My Java Guide - JVM", link: "/开发/My Java Guide/My Java Guide - JVM"},
                    ]
                },
                {
                    text: 'MySQL',
                    collapsed: false,  // 不折叠
                    items: [
                        {text: "My Java Guide - 计算机基础", link: "/开发/My Java Guide/My Java Guide - 计算机基础"},
                        {text: "My Java Guide - Java基础", link: "/开发/My Java Guide/My Java Guide - Java基础"},
                        {text: "My Java Guide - JVM", link: "/开发/My Java Guide/My Java Guide - JVM"},
                    ]
                },
                {
                    text: 'Redis',
                    collapsed: false,  // 不折叠
                    items: [
                        {text: "My Java Guide - 计算机基础", link: "/开发/My Java Guide/My Java Guide - 计算机基础"},
                        {text: "My Java Guide - Java基础", link: "/开发/My Java Guide/My Java Guide - Java基础"},
                        {text: "My Java Guide - JVM", link: "/开发/My Java Guide/My Java Guide - JVM"},
                    ]
                },
                {
                    text: '开发框架',
                    collapsed: false,  // 不折叠
                    items: [
                        {text: "My Java Guide - 计算机基础", link: "/开发/My Java Guide/My Java Guide - 计算机基础"},
                        {text: "My Java Guide - Java基础", link: "/开发/My Java Guide/My Java Guide - Java基础"},
                        {text: "My Java Guide - JVM", link: "/开发/My Java Guide/My Java Guide - JVM"},
                    ]
                },
            ]
        }
    ]
}