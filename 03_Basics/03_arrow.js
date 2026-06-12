const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// kisi k andar agar this kiya to wo current context feed karta h
// this node me {} or browser me window 


// function chai(){
//     let username = "aparmit"
//     console.log(this.username);
// }


// chai()

// const chai = function () {
//          let username = "aparmit"
//         console.log(this.username);
//      }
// still undefined

// const chai = () => {
//     let username = "aparmit"
//     console.log(this.username);
// }

// chai()


//+++++++++++++++++++ARROW FUNCTION

const addTwo = (num1,num2) => {
    return num1+num2
}

console.log(addTwo(3,4))