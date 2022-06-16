module.exports = {
  title: '前端笔记',
  description: '前端笔记',
  base: '/fe-note/',
  markdown: {
    toc: {
      includeLevel: [1, 2, 3]
    }
  },
  themeConfig: {
    nav: [
      { text: 'HTML', link: '/HTML/' },
      { text: 'javascript', link: '/javascript/' },
      { text: '框架', items: [
        { text: 'Vue', link: '/框架/Vue/' },
      ] },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Group 1',   // 必要的
          path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/'
          ]
        },
      ],
      '/HTML/': [
        {
          title: 'HTML',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            {
              title: '简介',
              path: '/HTML/'
            },
            {
              title: '语义化标签',
              path: '语义化标签'
            },
          ]
        },
      ],
      '/javascript/': [
        {
          title: 'javascript',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            {
              title: 'javascript',
              path: '/javascript/'
            },
            {
              title: '原型和原型链',
              path: '原型和原型链'
            },
            {
              title: '执行上下文',
              path: '执行上下文'
            },
          ]
        },
      ],
      '/框架/Vue/': [
        {
          title: 'Vue2',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            {
              title: '简介',
              path: '/框架/Vue/'
            },
          ]
        },
      ],
      '/': ['/']
    }
  },
}