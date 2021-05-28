const Robot = require('../dist/robot')
const __url = {
    alipay: 'https://opendocs.alipay.com/mini/00d5f5'
    
  
}



const saveCallBack =  (data) => {
    return new Promise((resolve) =>{
        setTimeout(_=>{
            resolve(data)
        },2000)
    })
   
}




Robot.init().then(res=>{
    const getChangeLog = async () => {
        for(let item of Object.keys(__url)){
            let __data =   await Robot.getScrapeData(item, __url[item])
             let item1 = await saveCallBack(__data)
             console.log(item1)
        }
        console.log('done')
    }
    getChangeLog()
  
 })