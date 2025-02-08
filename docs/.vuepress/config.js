//设置全局主题

//导航栏
module.exports = {
    //base: '/VuepressStart/', // 仓库名
    title: 'Dynamo', // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
    description: 'Vuepress-Start-Dynamo', 
    head: [
      ['meta', { name: 'author', content: 'Dynamo' }], // 网页F12检查时可以看到相关内容
      ['meta', { name: 'keyword', content: 'Dynamo对vuepress的第一次尝试' }],
      ['link', { rel: 'icon', href: '/assets/img/comeon.jpg' }], // 标签页的图标
    ],

    themeConfig: { // 主题
      logo: '/assets/img/hero.png', //左上角logo,导航栏左边logo
      lastUpdated: '上一次更新时间：', // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部

      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about/' },
        { text: 'Fun', link: '/fun/'},
        { text: 'External', link: 'https://google.com' },
        // {//下拉列表方式1
        //     text: 'About',
        //     ariaLabel: '关于',
        //     items: [
        //       { text: 'About', link: '/about/' },
        //       { text: 'about1', link: '/about/about1/' },
        //       { text: 'about2', link: '/about/about2/'}
        //     ]
        // },
        {//下拉列表方式2，下拉列表内有分组
            text: 'Function',
            items: [
              { text: 'Languages', items: [
                { text: 'Chinese', link: '/language/chinese/' },
                { text: 'English', link: '/language/English/' }
              ] },

              { text: 'Group', items: [
                { text: 'Home', link: '/' },
                { text: 'About', link: '/about/' },
                { text: 'fun', link: '/fun/'}
              ] }
            ]
        },
      ],
      sidebar: { //每个页面侧边栏都不一样，要注意写的顺序，主页如果有只能写在最后面
        '/about/': [
            { // 与侧边栏分组嵌套使用
                title: 'About',   // 必要的
                path: '/about/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,false表示让一个组永远都是展开状态
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                  '/about/',
                  '/about/about1.html',
                  '/about/about2.html',
                ]
            }
        ],

        '/fun/': [ // 未与侧边栏分组嵌套使用
          '/fun/',
          '/fun/fun1.html',
          '/fun/fun2.html',
        ],
      },
    //   sidebar: [ //全局的侧边栏分组，每个页面侧边栏都分组且都一样
    //     { // 组1
    //         title: 'About',   // 必要的
    //         path: '/about/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //         collapsable: false, // 可选的, 默认值是 true,false表示让一个组永远都是展开状态
    //         sidebarDepth: 2,    // 可选的, 默认值是 1
    //         children: [
    //           '/about/',
    //           '/about/about1.html',
    //           '/about/about2.html',
    //         ]
    //     },
    //     { // 组2
    //         title: 'Fun',
    //         children: [ 
    //           '/fun/',
    //           '/fun/fun1.html',
    //           '/fun/fun2.html',
    //         ],
    //         initialOpenGroupIndex: -1 // 可选的, 默认值是 0，-1表示初始时所有分组都关闭
    //     }
    //   ],
    //   sidebar: [ //全局左侧导航侧边栏，没分组
    //     '/',
    //     '/about/',
    //     '/about/about1.html',
    //     '/about/about2.html',
    //     '/fun/',
    //     '/fun/fun.html',
    //     '/fun/fun1.html',
    //   ]
    }
}