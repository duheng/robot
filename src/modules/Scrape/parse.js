const Parse = {
    async wx(page) {
    let __data = {}  
    let __keySelector = '#docContent .content h3'
    let __valueSelector = '#docContent .content ol'
    await page.waitForSelector(__keySelector)
    await page.waitForSelector(__valueSelector)
    const __key  = document.querySelector(__keySelector).innerText
    const __value = document.querySelector(__valueSelector).outerHTML
    __data[__key] = __value
    return __data
  },
   alipay() {
    let __data = {}  
    let __keySelector = '#docsArticleContent h2'
    let __valueSelector = '#docsArticleContent ul'
    // await page.waitForSelector(__keySelector)
    // await page.waitForSelector(__valueSelector)
    const __key  =  document.querySelector(__keySelector).innerText
    const __value = document.querySelector(__valueSelector).outerHTML
    __data[__key] = __value
    return __data
  }   
}
  
export default Parse