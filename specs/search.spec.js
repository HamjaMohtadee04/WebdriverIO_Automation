const searchActions = require("../test/search/searchAction")
 const searchText = "Nike air"
const expectedProduct ='Nike air presto by you'
const invalidProduct ='Nike air presto you'
describe("Evershop website automation test suite",()=>{
   
 it("succesfully search a valid product",async()=>{
    await searchActions.scrollToCredit()
        // await searchActions.clickSearchIcon()
        // await searchActions.EnterProductName(productName)
        await searchActions.search(searchText)
     const test = await searchActions.getProductList(searchText)
     console.log(test);
    await browser.pause(5000)
    const productList = await searchActions.getProductList(searchText);
 let  searchCount =0
    for(let i=0;i<productList.length;i++){
        let currentProduct = productList[i]
       
 try{
    expect(expectedProduct).toEqual(currentProduct)
//   expect(expectedProduct).to.eql(currentProduct);
  searchCount++;
    }
    catch(error){
        console.log("searched product not found yet");
    }
    }
     if (searchCount ==0){
    throw new Error("searched product not found")
   }  
    });

    //inavalid product
    it(" search a invalid product",async()=>{
        // await searchActions.clickSearchIcon()
        // await searchActions.EnterProductName(productName)
        await searchActions.search(searchText)
     const test = await searchActions.getProductList(searchText)
     console.log(test);
    await browser.pause(5000)
    const productList = await searchActions.getProductList(searchText);
 let  searchCount =0
    for(let i=0;i<productList.length;i++){
        let currentProduct = productList[i]
       
 try{
    expect(invalidProduct).toEqual(currentProduct)
//   expect(expectedProduct).to.eql(currentProduct);
  searchCount++;
    }
    catch(error){
        console.log("searched product not found yet");
    }
    }
    await expect(searchCount).toEqual(0)
    });
});

