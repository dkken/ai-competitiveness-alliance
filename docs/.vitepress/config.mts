import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI竞争力提升计划',
  description: '面向所有专业大学生的零门槛AI实战课程',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  appearance: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'og:title', content: 'AI竞争力提升计划 —— 面向所有专业大学生的零门槛AI实战课程' }],
    ['meta', { name: 'og:description', content: '零基础、零代码、零数学门槛。4周上手AI工具，就业创业双轨并行。' }],
    ['meta', { name: 'og:image', content: '/logo.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'AI竞争力提升计划' }],
    ['meta', { name: 'twitter:description', content: '面向所有专业大学生的零门槛AI实战课程' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: '课程首页', link: '/' },
      {
        text: '第一阶段 (必修)',
        items: [
          { text: '模块1：AI认知破壁', link: '/phase1/module1' },
          { text: '模块2：Prompt Engineering', link: '/phase1/module2' },
          { text: '模块3：AI工具深度实战', link: '/phase1/module3' },
          { text: '模块4：AI+X', link: '/phase1/module4' },
        ]
      },
      {
        text: '第二阶段',
        items: [
          {
            text: '就业轨',
            items: [
              { text: '模块5A：AI简历与面试', link: '/phase2/module5a' },
              { text: '模块6A：AI办公效率', link: '/phase2/module6a' },
              { text: '模块7A：AI作品集', link: '/phase2/module7a' },
              { text: '模块8A：AI职业导航', link: '/phase2/module8a' },
            ]
          },
          {
            text: '创业轨',
            items: [
              { text: '模块5B：AI创业赛道定位', link: '/phase2/module5b' },
              { text: '模块6B：Vibe Coding产品开发', link: '/phase2/module6b' },
              { text: '模块7B：AI营销与获客', link: '/phase2/module7b' },
              { text: '模块8B：OPC公司化运营', link: '/phase2/module8b' },
            ]
          }
        ]
      },
      {
        text: '第三阶段 (进阶)',
        items: [
          { text: '模块9：AI自动化工作流', link: '/phase3/module9' },
          { text: '模块10：AI智能体深度实战', link: '/phase3/module10' },
          { text: '模块11：终身学习体系', link: '/phase3/module11' },
        ]
      },
      { text: '关于课程', link: '/about' },
    ],

    sidebar: {
      '/phase1/': [
        {
          text: '第一阶段：AI通用能力',
          collapsed: false,
          items: [
            { text: '概览', link: '/phase1/' },
            { text: '模块1：AI认知破壁', link: '/phase1/module1' },
            { text: '模块2：Prompt Engineering', link: '/phase1/module2' },
            { text: '模块3：AI工具深度实战', link: '/phase1/module3' },
            { text: '模块4：AI+X', link: '/phase1/module4' },
          ]
        }
      ],
      '/phase2/': [
        {
          text: '第二阶段：就业轨',
          collapsed: false,
          items: [
            { text: '概览', link: '/phase2/' },
            { text: '模块5A：AI简历与面试', link: '/phase2/module5a' },
            { text: '模块6A：AI办公效率', link: '/phase2/module6a' },
            { text: '模块7A：AI作品集', link: '/phase2/module7a' },
            { text: '模块8A：AI职业导航', link: '/phase2/module8a' },
          ]
        },
        {
          text: '第二阶段：创业轨',
          collapsed: true,
          items: [
            { text: '模块5B：AI创业赛道定位', link: '/phase2/module5b' },
            { text: '模块6B：Vibe Coding产品开发', link: '/phase2/module6b' },
            { text: '模块7B：AI营销与获客', link: '/phase2/module7b' },
            { text: '模块8B：OPC公司化运营', link: '/phase2/module8b' },
          ]
        },
      ],
      '/phase3/': [
        {
          text: '第三阶段：超级个体进阶（3周）',
          collapsed: false,
          items: [
            { text: '概览', link: '/phase3/' },
            { text: '模块9：AI自动化工作流', link: '/phase3/module9' },
            { text: '模块10：AI智能体深度实战', link: '/phase3/module10' },
            { text: '模块11：终身学习体系', link: '/phase3/module11' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ai-competitiveness-alliance/course' }
    ],

    footer: {
      message: 'AI竞争力提升计划 · 面向所有专业大学生的零门槛AI实战课程',
      copyright: 'Copyright © 2026 AI竞争力联盟'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索课程内容',
            buttonAriaLabel: '搜索课程内容'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭',
            noResultsText: '未找到相关结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: 'enter',
              navigateText: '导航',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'escape'
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/ai-competitiveness-alliance/course/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: '上一节',
      next: '下一节'
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详情'
    }
  }
})