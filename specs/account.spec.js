const account = require("../test/account/accountLocatorAction")
const Utilities = require('../utils/utilities');
let email = ""
const password = "admin"
const fullName ="ADMIN1"
describe("Evershop account testing",()=>{

    it("successfully signed up with valid information",async()=>{
        email = Utilities.generateEmail()
        await account.Registration(fullName,email,password,)
    })

it("successfully login",async ()=>{
    await account.LogIn(email,password)
})

})