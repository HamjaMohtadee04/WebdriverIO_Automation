class AccountLocator{
    get accountIcon(){
        return $("//a[contains(@href,'account/login')]")
    }
    get Email(){
        return $("//input[@name='email']")
    }
    get Password(){
        return $("//input[@name='password']")
    }
    get buttonSignin(){
        return $("//button/span[contains(text(),'SIGN IN')]")
    }
    get createAccount(){
        return $("//a[contains(@href,'register')]")
    }
    get fullName(){
        return $("//input[@name='full_name']")
    }
    get buttonSignUP(){
        return $("//button/span[contains(text(),'SIGN UP')]")
    }
}

module.exports = new AccountLocator()

