class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this.email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}


const bablu = new User("Bablu@gmail.com","bablukima")
console.log(bablu.password)