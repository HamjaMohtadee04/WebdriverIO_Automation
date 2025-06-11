const searchObject = require("./searchObject")
const productName = "Nike air zoom pegasus 35"
class SearchActions{
    async clickSearchIcon(){
        await searchObject.searchIcon.click()
    }
    async EnterProductName(productName){
        await searchObject.searchInputField.setValue(productName)
        // await browser.keys("Enter")
        // await browser.pause(5000)
    }
    async search(){
        await this.clickSearchIcon()
        await this.EnterProductName(productName)
        await browser.keys("Enter")
    }
}
module.exports = new SearchActions();