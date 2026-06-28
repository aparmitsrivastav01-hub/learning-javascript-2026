const user = {
    username: "Srivastav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("GOT USER DETAILS FROM DATABASE ");
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}

const userOne = new User("Srivastav",7,true)
const userTwo = new User("Gupta",5,false)

console.log(userOne);
console.log(userTwo);



