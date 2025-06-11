const searchObject = require("./searchObject")
const searchText = "Nike air"
class SearchActions{
    async clickSearchIcon(){
        await searchObject.searchIcon.click()
    }
    async EnterProductName(searchText){
        await searchObject.searchInputField.setValue(searchText)
        // await browser.keys("Enter")
        // await browser.pause(5000)
    }
    async search(){
        await this.clickSearchIcon()
        await this.EnterProductName(searchText)
        await browser.keys("Enter")
    }
    async getProductList(searchText){
      const productData = await searchObject.searchResults(searchText)
      let searchedData =[]
     for (let i=0;i<productData.length;i++){
        searchedData.push(await productData[i].getText());
     }
     return searchedData
    }
}
module.exports = new SearchActions();