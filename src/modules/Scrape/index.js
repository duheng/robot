import Parse from './parse'

export default {
  async init(core) {
    this.core = core;
  },
  async getData(platform, url) {
    const { page } = this.core
    await this.core.openUrl(page, url)
    await Parse[platform].waitSelector(page)
    const result = await page.evaluate(Parse[platform].parseDom)
    return result
  }

}