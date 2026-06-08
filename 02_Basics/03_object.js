// singleton ==  literal ki trah declare kiya agar  != singleton vice versa in constructor

// object literals
// Object.create = constructor k through

const mySym = Symbol("key1")

const Jsuser = {
    name: "Aparmit",
    "full name": "Aparmit Srivastav",
    [mySym]: "mynewkey1",
    age: 17,
    location: "Hardoi",
    email: "aparmitsrivastav01@gmail.com",
    lastLoginDays: ["Monday","Saturday"]

}



// console.log(Jsuser.name)
// console.log(Jsuser["age"])
// console.log(Jsuser["full name"])
// console.log(typeof Jsuser.mySym)
// console.log(Jsuser.mySym) 
// console.log(Jsuser[Sym])
// console.log(typeof Jsuser[mySym])

Jsuser.email = "newgmail.com"
// Object.freeze(Jsuser)  freeze changes


Jsuser.greeting = function(){
    console.log("HELLO MR.GENDU")
}

Jsuser.greeting2 = function(){
    console.log(`"HELLO MR.${this.name}"`)
}

Jsuser.greeting()
Jsuser.greeting2()