// console.log(myName.length)
let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

Object.prototype.trueLength = function(string){
    console.log(string.trim().length);
}

trueLength(myName)

//* PROTOTYPINGG *// 

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()


//inheritance

const User = {
    name: "CHAI",
    gmail: "chaiwale@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)