const Parse = {
    wx: {
        async waitSelector(page) {
            let __keySelector = '#docContent .content h3'
            let __valueSelector = '#docContent .content ol'
            await page.waitForSelector(__keySelector)
            await page.waitForSelector(__valueSelector)
        },
        parseDom() {
            let __data = {}  
            let __keySelector = '#docContent .content h3'
            let __valueSelector = '#docContent .content ol'
            const __key  = document.querySelector(__keySelector).innerText
            const __value = document.querySelector(__valueSelector).outerText
            __data[__key] = __value
            return __data
        }
  },
   alipay: {
       async waitSelector(page) {
        let __keySelector = '#docsArticleContent h2'
        let __valueSelector = '#docsArticleContent ul'
        await page.waitForSelector(__keySelector)
        await page.waitForSelector(__valueSelector)
       },
       parseDom() {
        let __data = {}  
        let __keySelector = '#docsArticleContent h2'
        let __valueSelector = '#docsArticleContent ul'
        const __key  =  document.querySelector(__keySelector).innerText
        const __value = document.querySelector(__valueSelector).outerText
        __data[__key] = __value
        return __data
       }
  },
  react: {
    async waitSelector(page) {
        let __keySelector = '#readme .markdown-body h2'
        let __valueSelector = '#readme .markdown-body ul'
        await page.waitForSelector(__keySelector)
        await page.waitForSelector(__valueSelector)
       },
       parseDom() {
        let __data = {}  
        let __keySelector = '#readme .markdown-body h2'
        let __valueSelector = '#readme .markdown-body ul'
        const __key  =  document.querySelector(__keySelector).innerText
        const __value = document.querySelector(__valueSelector).outerText
        __data[__key] = __value
        return __data
       }
  }

}
  
export default Parse