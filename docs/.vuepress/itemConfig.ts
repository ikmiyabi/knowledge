import fs from 'fs'
import yaml from 'js-yaml'
import pathUtil from 'path'
import type { NavbarConfig, NavbarGroup, SidebarItem } from '@vuepress/theme-default'

// READMEファイル名
const README: string = 'README.md'
// Markdownファイルの正規表現
const MARKDOWN_PATTERN: RegExp = /^.*\.md$/
// ドキュメントディレクトリ
const DOCS_ROOT: string = `${process.env.PWD}/docs/`
// コンテンツyaml
const CONTENTS_YAML: string = 'contents.yaml'
// リンクyaml
const LINKS_YAML: string = 'links.yaml'

// 指定したディレクトリ内のファイル(orディレクトリ)の一覧を取得する
function readDir(dir: string): string[] {
  return fs.readdirSync(DOCS_ROOT + dir)
}

// 指定したファイルを読み込む
function readFile(fileName: string): string {
  return fs.readFileSync(DOCS_ROOT + fileName, 'utf8')
}

// 指定したパスがファイルか
function isFile(path: string): boolean {
  return fs.statSync(DOCS_ROOT + path).isFile()
}

// 指定したパスが存在するか
function isExist(path: string): boolean {
  return fs.existsSync(DOCS_ROOT + path)
}

/**
 * ディレクトリからサイドバー（またはナビバー）のMarkdownコンテンツを取得する
 * @param {string} dir 対象ディレクトリ
 */
function markdownContents(dir: string): string[] {
  return readDir(dir).map(fileName => {
    // READMEはchildには追加しない
    const isReadme = (fileName == README)
    if (isFile(dir + fileName) && MARKDOWN_PATTERN.test(fileName) && !isReadme) {
      return dir + pathUtil.basename(fileName)
    }
  }).filter(v => v)
}

/**
 * 表示するコンテンツを取得
 * @param {string} title サイドバーに表示するタイトル
 * @param {string} filePath サイドバーに表示するディレクトリのルートパス
 */
function getItem(title: string, filePath: string): SidebarItem {
  return {
    text: title,
    link: isExist(filePath + README) ? filePath : undefined,
    children: markdownContents(filePath)
  }
}

/**
 * ナビバーに表示する外部リンクを取得
 */
function getLinks(): NavbarGroup {
  return yaml.load(readFile(LINKS_YAML)) as NavbarGroup
}

/**
 * ナビバーに表示するコンテンツを取得
 */
export function getNavbarContents() {
  // yamlからカテゴリー情報を取得
  const navbarConfig = yaml.load(readFile(CONTENTS_YAML)) as NavbarConfig

  // テーマのパスからコンテンツの情報を取得してリンクを追加
  const navbarContents: NavbarConfig = Object.keys(navbarConfig).map(categoryPath => {
    const categoryGroup = navbarConfig[categoryPath]
    const categoryTitle = categoryGroup.text
    const themes = categoryGroup.children

    const children = themes.map((theme: { text: string; link: string }) => {
      return getItem(theme.text, categoryPath + theme.link)
    })

    return {
      text: categoryTitle,
      link: categoryPath,
      children: children
    }
  })

  // 外部リンクを設定から取得して、ナビバーに追加
  navbarContents.push(getLinks())

  return navbarContents
}

/**
 * サイドバーに表示するコンテンツを取得
 */
export function getSidebarContents() {
  // yamlからカテゴリー情報を取得
  const sidebarConfig = yaml.load(readFile(CONTENTS_YAML))

  // テーマのパスからコンテンツの情報を取得してリンクを追加
  const sidebarContents = {}
  Object.keys(sidebarConfig).forEach(categoryPath => {
    const categoryGroup = sidebarConfig[categoryPath]
    const themes = categoryGroup.children

    const children = themes.map((theme: { text: string; link: string }) => {
      return getItem(theme.text, categoryPath + theme.link)
    })

    sidebarContents[categoryPath] = children
  })

  return sidebarContents
}
