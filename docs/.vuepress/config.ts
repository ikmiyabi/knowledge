import { getSidebarContents, getNavbarContents } from './itemConfig'

module.exports = {
  lang: 'ja',
  description: '個人用開発ナレッジ',
  title: 'Knowledge',
  serviceWorker: true,
  dest: 'dist/',
  base: '/',
  toggleSidebar: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: `/apple-touch-icon.png` }],
  ],
  plugins: [
    ['@vuepress/plugin-search']
  ],
  themeConfig: {
    toggleSidebar: true,
    lang: 'ja',
    repo: 'ikmiyabi/knowledge',
    logo: '/logo.png',
    logoDark: '/logo.png',
    docsDir: 'docs',
    lastUpdated: true,
    lastUpdatedText: '最終更新',
    navbar: getNavbarContents(),
    sidebar: getSidebarContents()
  }
}
