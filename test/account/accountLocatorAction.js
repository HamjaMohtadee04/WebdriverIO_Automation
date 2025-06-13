const accountLocatorObject = require("./accountLocatorObject")
const AccountLocator = require("./accountLocatorObject")


class Account{
    async clickAccountIcon(){
        await AccountLocator.accountIcon.waitForClickable({timeout:20000})
        await AccountLocator.accountIcon.click()
    }
    async enterEmail(email){
        await AccountLocator.Email.setValue(email)
        await browser.pause(3000)
    }
async enterPassword(password){
    await AccountLocator.Password.setValue(password)
}
async createAccount(){
    await AccountLocator.createAccount.click()
}
async getFullName(fullname){
    await AccountLocator.fullName.setValue(fullname)
}
async SignIn(){
    await AccountLocator.buttonSignin.click()
}
async SignUp(){
    await AccountLocator.buttonSignUP.click()
}

async LogIn(email,password){
    await this.clickAccountIcon()
    await this.enterEmail(email)
    await this.enterPassword(password)
    await this.SignIn()
}

async Registration(fullName,email,password){
    await this.clickAccountIcon()
    await this.createAccount()
    await this.getFullName(fullName)
    await this.enterEmail(email)
    await this.enterPassword(password)
    await this.SignUp()
}


}

module.exports = new Account



