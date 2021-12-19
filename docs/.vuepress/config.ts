import { getSidebarContents, getNavbarContents } from './itemConfig'

module.exports = {
  base: '/knowledge/',
  lang: 'ja',
  title: 'Knowledge',
  description: '個人用開発ナレッジ',
  serviceWorker: true,
  dest: 'dist/',
  public: 'docs/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/knowledge/images/favicon_16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/knowledge/images/favicon_32x32.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/knowledge/images/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/knowledge/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#AFA2EB' }],
  ],
  plugins: [
    ['@vuepress/plugin-search']
  ],
  themeConfig: {
    repo: 'ikmiyabi/knowledge',
    logo: '/images/logo.png',
    docsDir: 'docs',
    lastUpdated: true,
    lastUpdatedText: '最終更新',
    navbar: getNavbarContents(),
    sidebar: getSidebarContents()
  }
}
