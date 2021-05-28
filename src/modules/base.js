import puppeteer from 'puppeteer'
export default class Base {
  constructor() {
    this.config = {
      type: 'scrape'
    };
  }

  mergeConfig(opts) {
    this.config = { ...this.config, ...opts }; 
  }

  async use(plugin, ...args) {
    await plugin.init(this, ...args);
  }
  async creatBrowser(options) {
    return await puppeteer.launch({...options});
  }
  async creatPage(browser) {
    return await browser.newPage();
  }
  async openUrl(page, url) {
    return await page.goto(url)
  }
}
