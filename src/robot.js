import Base from './modules/base';
import Scrape from './modules/Scrape';
const actionType = {
  scrape: Scrape
}
const Robot = {
    async init(options = {}) {
      Base.config = {...Base.config, ...options}
      await Base.use(Scrape)
    },

    async getScrapeData(platform, url ) {
      if(actionType['scrape']) {
        return await actionType['scrape'].getData(platform, url)
      }else {
        console.log('没找到该类型的action')
      }
      
    }
  }
  export default Robot;
