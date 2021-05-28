import puppeteer from 'puppeteer'

export default  {
    config: {},
    async use(plugin, ...args) {
      await plugin.init(this, ...args);
    },
    async creatBrowser(options) {
      return await puppeteer.launch({...options});
    },
    async creatPage(browser) {
      return await browser.newPage();
    },
    async openUrl(page, url) {
      return await page.goto(url)
    }
  }
  