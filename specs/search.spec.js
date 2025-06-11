const searchActions = require("../test/search/searchAction")
const productName = "Nike air zoom pegasus 35"


describe("Evershop website automation test suite",()=>{
   
    it("succesfully search a valid product",async()=>{
        // await searchActions.clickSearchIcon()
        // await searchActions.EnterProductName(productName)
        await searchActions.search(productName)
        await browser.pause(5000)
    })
})

