function sayMyName(){
    console.log("A")
    console.log("P")
    console.log("A")
    console.log("R")
    console.log("M")
    console.log("I")
    console.log("T")
}

// sayMyName()

function addTwoNumbers(a,b){ //parameters
    return a+b
}

// console.log(addTwoNumbers(2,2)) arguments

function addThreeNumbers(x,y,z){
    console.log(x+y+z)
}

// const result = addThreeNumbers(2,4,5)
// console.log(result) ye undefined isliye ayega kyunki return nahi h na  bhai


function loginUserMessage(username){

    if(username=== undefined){
        console.log("pls enter a username")
        return //agar khali blank return dedo to undefined dedeta h return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("aparmit"))

// console.log(loginUserMessage()) undefined ayega na ki null

function calculateCartPrice(val1,val2,...num1){ //rest operator 
    return num1
}

// console.log(calculateCartPrice(200,400,500))

const user = {
    username : "APARMITT",
    price :199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username}, price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "SAMVA",
//     price: 700000000000
// })

const myNewArray = [200,300,400]
function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(myNewArray))
