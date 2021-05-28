const Robot = require('../dist/robot')
const __url = {
    alipay: 'https://opendocs.alipay.com/mini/00d5f5',
    wx:'https://developers.weixin.qq.com/miniprogram/dev/framework/release/'
}



const saveCallBack =  (data) => {
    return new Promise((resolve) =>{
        setTimeout(_=>{
            resolve(data)
        },2000)
    })
   
}




const __Robot = new Robot({ type: 'scrape' })
__Robot.init().then(res=>{
       const getChangeLog = async () => {
        for(let item of Object.keys(__url)){
            let __data =   await __Robot.getScrapeData(item, __url[item])
             let item1 = await saveCallBack(__data)
             console.log(item1)
        }
        console.log('done')
    }
    getChangeLog()
})
// Robot.init().then(res=>{
//     const getChangeLog = async () => {
//         for(let item of Object.keys(__url)){
//             let __data =   await Robot.getScrapeData(item, __url[item])
//              let item1 = await saveCallBack(__data)
//              console.log(item1)
//         }
//         console.log('done')
//     }
//     getChangeLog()
  
//  })