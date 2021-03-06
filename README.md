# vuepress-theme-zjy

> https://smile921.github.io/vuepress-theme-zjy

## 安装
> yarn add vuepress-theme-zjy || npm i vuepress-theme-zjy

## 配置

`docs/vuepress/config.js`

```js
module.exports = {
  title: `smile921's Blog`,
  description: '蝴蝶过山门，轻舟过重山',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '景',
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
  theme: 'zjy',
  themeConfig: {
    // 主页banner
    background: './bg.jpg',
    // zjy 主题
    material: 'indigo',
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
```

`docs/README.md`

```yaml
---
layout: 'home'
title: 'Home'
date: '2018-05-01'
---
```
layout home对应主页布局

假定你的文章都放在`articles`目录

`docs/articles/*.md`

需要给出以下基本信息

```yaml
---
title: vuepress-theme-zjy
date: '2018-05-01 14:05:05'
tags:
    - vuepress
---
```

Go!


## License

MIT
