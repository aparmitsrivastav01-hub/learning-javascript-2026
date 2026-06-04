// // // // const name = "Aparmit Srivastav"
// // // // const repoCount = 50

// // // // // console.log(string+" "+repoCount)


// // // // //Bracket Pair Colorization
// // // // console.log(`hello my name is ${name} current repocount are :${repoCount}`)


// // const gameName = new String('Fighter-rr-OG')

// // // // // console.log(gameName[0])
// // // // // console.log(gameName.__proto__);

// // // // // console.log(gameName.length);
// // // // // console.log(gameName.toUpperCase())
// // // // // console.log(gameName.charAt(2))
// // // // // console.log(gameName.indexOf("t"))

// // // // const newString = gameName.substring(0,4) //negative not allowed
// // // // // console.log(newString);

// // // // const anotherString = gameName.slice(-8,4) //negative allowed
// // // // console.log(anotherString)

// // // const newStringOne = "                Fighter            "
// // // console.log(newStringOne.trim())  


// // // const url = "https://finsight.ai/fingpt"

// // // const updatedString = url.replace('fingpt','fingptfinanceai')

// // // console.log(updatedString)

// // // console.log(url.includes('fingpt'))

// // console.log(gameName.split("-",2))



// //'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''//



// // Level 1 Basic Warm Up

// // let str = "Aparmit Srivastav"

// //console.table([str.length,str[0],str.at(-1),str.toUpperCase(),str.toLowerCase(),str.includes("mit"),str.replace("Srivastav","coder")]);

// let str = "JavaScript"
// console.log(str.slice(-3))


function passwordStrength(password){
    if(password.length <8){
        return 'Weak'
    }
    
    return"Strong"
}

console.log(passwordStrength("tmkc"))