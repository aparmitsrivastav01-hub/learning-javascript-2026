// const id = Symbol('123') 
// const anotherId = Symbol('123')
// console.log(id==anotherId)
// console.log(id)
// console.log(anotherId)

// const bigNumber = 400400420402502052n
// console.log(typeof bigNumber)

let num = null;
console.log(typeof num) // important ######################################################hehe##################

const myFunction = function(){
    console.log("Gello World")
}

console.log(myFunction)




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive)= copy , Heap(Non - Primitive) = Reference

let myYoutubename = "aparmit srivastav"

let anotherName = myYoutubename 
anotherName = "coffee aur aparmit"

console.log(myYoutubename)
console.log(anotherName)

let userOne = {
    email:"user@gmail.com",
    upi: "12345@ptyes"
}

let userTwo = userOne

userTwo.email = "heap@gmail.com"

console.log(userOne.email)