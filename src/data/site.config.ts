interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Bruno Yu', // Site author
	title: "Bruno's Blog", // Site title.
	description: '歡迎來到布魯諾的筆記本，這邊紀錄著布魯諾前端研究的點點滴滴', // Description to display in the meta tags
	lang: 'zh-TW',
	ogLocale: 'zh-TW',
	shareMessage: '歡迎來到布魯諾的筆記本', // Message to share a post on social media
	paginationSize: 9 // Number of posts per page
}
