const user = {
    username: "Srivastav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("GOT USER DETAILS FROM DATABASE ");
    }
}

console.log(user.username);
console.log(user.getUserDetails());

