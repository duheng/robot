import Parse from './parse'

export default {
  async init(core) {
    this.core = core
    this.browser = await core.creatBrowser({headless: false})
    this.page = await core.creatPage(this.browser)
  },
  async getData(platform, url) {
    const Page = this.page
    await this.core.openUrl(Page, url)
    let __keySelector = '#docsArticleContent h2'
    let __valueSelector = '#docsArticleContent ul'
    await Page.waitForSelector(__keySelector)
    await Page.waitForSelector(__valueSelector)
    const result = await Page.evaluate(Parse[platform])
    this.browser.close() 
    return result
  }

}