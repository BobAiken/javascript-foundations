
var count = 0 

class Dragon {
    constructor (name,rider){
        this.name = name,
        this.rider = rider
        this.hungry = true
    }
    greet(){
        return `Hi, ${this.rider}!`
    }
    eat(){
    count++
        if (count >= 3){
            this.hungry = false 
        }
    }
}
var smaug = new Dragon('smaug');
console.log(smaug)





module.exports = Dragon