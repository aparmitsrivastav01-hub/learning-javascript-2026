


function User(email,password){
    this._email = email;
    this.password = password;


    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._emailemail = value
        }
    })
    Object.defineProperty(this,"password",{
        get: function(){
            return this._password.toUppercase()
        },
        set: function(value){
            this.email = value
        }
    })

}

const bablu = new  User("bablu","124")

console.log(bablu.email);
