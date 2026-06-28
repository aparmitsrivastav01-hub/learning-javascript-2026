function setUsername(username){
    this.username = username
}

function createUser(username,email,password){
    setUsername.call(this,username) //refernce hold nahi karta h gayab kardeta h agar .call na lagaye
    
    this.email = email
    this.password = password 
}


const chai = new createUser("chai","chai@gmail.com",123)
console.log(chai);
