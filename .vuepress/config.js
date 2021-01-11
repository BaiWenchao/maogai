module.exports = {
	title: '毛概复习整理',
	base: '/doc-mao/',
	description: '毛概各章节要点整理',
	themeConfig: {
		repo: "BaiWenchao/maogai",
		repoLabel: "Github",
		docsRepo: "BaiWenchao/maogai",
		docsBranch: "master/docs",
		editLinks: true,
		editLinkText: "帮助我们改善此页面！",
		lastUpdated: "Last Updated",
		sidebarDepth: 2,
		nav: [],
		sidebar: {
			 "/": [
			 "",
			 "ch1.md",
			 "ch2.md",
			 "ch3.md",
			 "ch4.md",
			 "ch5.md",
			 "ch6.md",
			 "ch7.md",
			 "ch8.md",
			 "ch9.md",
			 "ch10.md",
			 "ch11.md",
			 "ch14.md",
			 "memo.md",
			 "log.md",
     		],		
   		}
	},
	plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ]
  ]
}
