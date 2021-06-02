import Base from './modules/base';
import Scrape from './modules/Scrape';
const actionType = {
  scrape: Scrape
}

class Robot extends Base {
   constructor(opts = {}) {
    super(opts);
    // 合并参数
    this.mergeConfig(opts);
  }
  async init() {
     // 浏览器
    await this.initBrowser()
    // 初始化插件
    await this.initModules();
  }
  async initBrowser() {
    const { browser } = this.config
    this.browser = await this.creatBrowser({...browser})
    this.page = await this.creatPage(this.browser)
    await this.page.setDefaultNavigationTimeout(0); // 不受超时限制
  }
  async initModules() {
    await this.use(Scrape)
  }

  async closeBrowser() {
    if(this.browser) {
      return await this.browser.close()
    }
  } 

  async getScrapeData(platform, url ) {
    if(actionType['scrape']) {
      return await actionType['scrape'].getData(platform, url)
    }else {
      console.log('没找到该类型的action')
    }
    
  }
  
}

  export default Robot;
