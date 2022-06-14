module.exports = {
  title: 'fe-note',
  description: 'fe-note',
  markdown: {
    toc: {
      includeLevel: [1, 2, 3]
    }
  },
  themeConfig: {
    // sidebar: [
    //   {
    //     title: 'guide',   // 必要的
    //     path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //   },
    //   {
    //     title: 'HTML',   // 必要的
    //     path: '/HTML/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '',
    //       'one'
    //     ]
    //   }
    // ]
    // sidebar: [
    //   '/guide/',
    //   '/HTML/'
    // ]
    nav: [
      { text: 'HTML', link: '/HTML/' },
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
    }
  },
}