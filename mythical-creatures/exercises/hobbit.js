class Hobbit {
    constructor(name, age = 0){
        this.name = name
        this.age = age 
        this.adult = false
        this.old = false
        this.hasRing = false
    }
    celebrateBirthday(){
        this.age++
        if (this.age >32){
            this.adult = true
        }
        if (this.age > 100){
            this.old = true
        }
    }
    getRing(){
        if(this.name === "Frodo"){
            this.hasRing = true
            return `Here is the ring!`
        }
        return `You can't have it!`
    }
}
module.exports = Hobbit