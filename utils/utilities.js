class Utilities{
    generateEmail(){
        const timeStamp = new Date().getTime();
        const newEmail = `admin${timeStamp}@gmail.com`
        return newEmail
    }
}
module.exports = new Utilities