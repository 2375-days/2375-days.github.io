module.exports = ctx => ({
    title: 'TianHe Wiki', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: 'TianHe Wiki', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/img/head.jpg' }], 
    ],
	base: '/int0x80-blog/', // 这是部署到github相关的配置 /<repo>/
	dest: './ROOT',  // 设置输出目录  
	//设置编译后的输出目录./ROOT代表在工程的根目录下生成一个ROOT文件，里面是编译好的文件，可以拿ROOT直接部署。
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    theme: '@vuepress/theme-default',
    themeConfig: {
		sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
        // 顶部导航栏
        nav: [
             // 单项 text：显示文字，link：指向链接
             // 这里的'/' 指的是 docs文件夹路径
             // [以 '/' 结尾的默认指向该路径下README.md文件]
            { text: '常用网站', link: '/Navigation/' },  // http://localhost:8080/Wiki1001Pro/FAQ/
            // 多项，下拉形式
            {
                text: '运维文档', link: '/Document/',  //有items的 貌似点不动了
                items: [
                    // link：指向链接也可以是外网链接
					{ 
						text: '电脑问题',
						items: [
							{ text: '上网问题', link: '/Document/sw.md', },
							{ text: '打印机', link: '/Document/dy.md', },
							{ text: '软件', link: '', },
						],
					},
					{ 
						text: '应用系统问题', 
						items: [
							{ text: 'OA', link: '/test1.md', },
							{ 
								text: '交建通', link: '/test2.md', 
							},
							{ text: '综合管理平台', link: '' },
						],
					},
                ],
            },
			{
                text: '操作手册', link:'/Manual/',
                items: [
					{ 
						text: '各种账号申请说明', link:'',
					},
					{ 
						text: '综合管理平台', link:'',
					},
					{ 
						text: '一体化办公协同系统', link:'',
					},
                ],
            },
			{ text: '百度', link: 'https://www.baidu.com' },
        ],
        sidebar:{
			 // 打开FAQ主页链接时生成下面这个菜单
			'/Document/':[
				//多级菜单形式
				{
					// 菜单名
					title: '1',
					// 子菜单
					children: [
						// ['','']=>[路径,标题]
						// 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
						// 不以 '/' 结尾的就是指向.md文件             
						['/Document/1/11','11'], // '/FAQ/DigestionHeap/Digested.md'文件
						['/Document/1/12','12'],
					]
				},
				{
					title: '2',
					children: [
						['/Document/2/21','21'],
						['/Document/2/22','22'],
					]
				},
				['/Document/','文档首页'],
				['/Document/3/31',],
				['/Document/3/32',],
			],
		},
    },
})