class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`YOUR USERNAME : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const sri  = new User("Srivastav")

console.log(sri.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("APPLE","i@phone")

iphone.logMe()
console.log(iphone.createId())
