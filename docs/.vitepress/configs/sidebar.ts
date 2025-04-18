///docs/.vitepress/configs/sidebar.ts
//侧边栏
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/guide/': [
        {
            // text: '个人学习笔记',
            collapsed: false,
            items: [
                {
                    text: '笔记1',
                    link: '/webrtc/index'
                }
            ]
        }
    ],
    '/interview/': [
        {
            // text: '面试宝典',
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
    ],
    '/research/': [
        {
            text: '科研记录',
            collapsed: false,
            items: [
                {text: '1.需要阅读的文献汇总', link: '/research/需要阅读的文献汇总.md'},
                {text: '2.使用Sei模型提取序列特征',link: '/research/使用Sei模型提取序列特征.md'},
                {text: '3.DeepGSR模型复现',link: '/research/DeepGSR模型复现.md'},
                {text: '4.HyenaDNA提取特征',link: '/research/HyenaDNA提取特征.md'},
                {text: '5.DeepGenGrep模型复现',link: '/research/DeepGenGrep模型复现.md'},
                {text: '6.模型复现记录',link: '/research/模型复现记录.md'},
                {text: '7.DNABERT2微调',link: '/research/DNABERT2微调.md'},
                {text: '8.DeeReCT-PolyA模型复现',link: '/research/DeeReCT-PolyA模型复现.md'},
                {text: '9.机器学习课程推荐',link: '/research/机器学习课程推荐.md'},
                {text: '10.生物信息学入门课程推荐',link: '/research/生物信息学入门课程推荐.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
                {text: '',link: '/research/.md'},
            ]
        },
        // {
        //     text: '实验记录',
        //     collapsed: false,
        //     items: [
        //         {
        //             text: '1.文献阅读列表',
        //             link: '/scientific_research/需要阅读的文献汇总'
        //         }
        //     ]
        // },
    ],
    '/experience/': [
        {
            // text: '实践经验',
            collapsed: false,
            items: [
                {text: '基于VitePress快速搭建个人博客',link: '/experience/基于VitePress快速搭建个人博客.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                {text: '',link: '/experience/.md'},
                
            ]
        }
    ],
}