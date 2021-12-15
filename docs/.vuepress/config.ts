import fs from 'fs'
import yaml from 'js-yaml'
import pathUtil from 'path'

// READMEファイル名
const README = 'README.md'
// Markdownファイルの正規表現
const REGEXP = /^.*\.md$/
// ドキュメントディレクトリ
const DOCS_DIR = `${process.env.PWD}/docs/`
// コンテンツyaml
const CONTENTS_YAML = 'contents.yaml'
// リンクyaml
const LINKS_YAML = 'links.yaml'

// 指定したディレクトリ内のファイル(orディレクトリの一覧を取得する
const readDir = dir => fs.readdirSync(DOCS_DIR + dir)

// 指定したファイルを読み込む
const readFile = fileName => fs.readFileSync(DOCS_DIR + fileName, 'utf8')

// 指定したパスがファイルか
const isFile = path => fs.statSync(DOCS_DIR + path).isFile()

// 指定したパスが存在するか
const isExist = path => fs.existsSync(DOCS_DIR + path)

/**
 * ディレクトリからサイドバー（またはナビバー）のMarkdownコンテンツを取得する
 * @param {string} dir 対象ディレクトリ
 */
const markdownContents = dir => {
  return readDir(dir).map(fileName => {
    // READMEはchildには追加しない
    const isReadme = (fileName == README)
    if (isFile(dir + fileName) && REGEXP.test(fileName) && !isReadme) {
      return dir + pathUtil.basename(fileName)
    }
  }).filter(v => v)
}

/**
 * 表示するコンテンツを取得
 * @param {string} title サイドバーに表示するタイトル
 * @param {string} filePath サイドバーに表示するディレクトリのルートパス
 */
const getContent = (title, filePath) => {
  return {
    'text': title,
    'link': isExist(filePath + README) ? filePath : undefined,
    'children': markdownContents(filePath)
  }
}

/**
 * ナビバーに表示する外部リンクを取得
 */
const getLinks = () => {
  return {
    'text': '外部リンク',
    'children': yaml.load(readFile(LINKS_YAML))
  }
}

/**
 * ナビバーに表示するコンテンツを取得
 */
const getNavbarContents = () => {
  const navbarContents = []
  const directories = yaml.load(readFile(CONTENTS_YAML))
  Object.keys(directories).forEach(topDirectoryPath => {
    const topDirectory = directories[topDirectoryPath]
    const topDirectoryTitle = topDirectory['title']
    const subDirectories = topDirectory['children']

    const childContents = []
    Object.keys(subDirectories).forEach(subDirectory => {
      const title = subDirectories[subDirectory]
      childContents.push(getContent(title, topDirectoryPath + subDirectory))
    })

    navbarContents.push({
      text: topDirectoryTitle,
      link: topDirectoryPath,
      children: childContents
    })
  })
  navbarContents.push(getLinks())
  return navbarContents
}

/**
 * サイドバーに表示するコンテンツを取得
 */
const getSidebarContents = () => {
  const sidebarContents = {}
  const directories = yaml.load(readFile(CONTENTS_YAML))
  Object.keys(directories).forEach(topDirectoryPath => {
    const topDirectory = directories[topDirectoryPath]
    const subDirectories = topDirectory['children']

    const childContents = []
    Object.keys(subDirectories).forEach(subDirectory => {
      const title = subDirectories[subDirectory]
      childContents.push(getContent(title, topDirectoryPath + subDirectory))
    })

    sidebarContents[topDirectoryPath] = childContents
  })
  return sidebarContents
}

module.exports = {
  lang: 'ja',
  description: '個人用開発ナレッジ',
  title: 'Knowledge',
  serviceWorker: true,
  dest: 'dist/',
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
    repo: 'weseek/growi-docs',
    logo: '/logo.png',
    logoDark: '/logo.png',
    docsDir: 'docs',
    lastUpdated: true,
    lastUpdatedText: '最終更新',
    navbar: getNavbarContents(),
    sidebar: getSidebarContents()
  }
}
