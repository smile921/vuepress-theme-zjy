module.exports = {
  base: '/vuepress-theme-zjy/',
  dest: 'public',
  title: `smile921's Blog`,
  description: '蝴蝶过山门，轻舟过重山',
  port: '9090',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'blog',
      description: '蝴蝶过山门，轻舟过重山！'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: '',
  themeConfig: {
    background: './bg.jpg',
    // material 主题
    zjy: 'indigo',
    // github username
    username: 'smile921',
    // 社交网站
    social: [
        {
            name: '知乎',
            icon: 'zhihu',
            url: 'https://www.zhihu.com'
        },
        {
            name: 'github',
            icon: 'github',
            url: 'https://github.com/smile921'
        },
        {
            name: '微博',
            icon: 'weibo',
            url: 'https://weibo.com'
        }
    ],
    // 文章目录
    articleDir: 'articles',
    nav: [
      {
        text: '文章',
        link: '/articles/'
      }
    ]
  }
}
