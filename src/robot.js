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
    this.browser = await this.creatBrowser({headless: false})
    this.page = await this.creatPage(this.browser)
  }
  async initModules() {
   await this.use(Scrape)
  }
  async getScrapeData(platform, url ) {
    if(actionType['scrape']) {
      return await actionType['scrape'].getData(platform, url)
    }else {
      console.log('没找到该类型的action')
    }
    
  }
  
}
// const Robot = {
//     async init(options = {}) {
//       Base.config = {...Base.config, ...options}
//       await Base.use(Scrape)
//     },

//     async getScrapeData(platform, url ) {
//       if(actionType['scrape']) {
//         return await actionType['scrape'].getData(platform, url)
//       }else {
//         console.log('没找到该类型的action')
//       }
      
//     }
//   }
  export default Robot;
