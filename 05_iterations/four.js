// OBJECTT

const myobj = {
    js : "javascript",
    py : "python",
    cpp : "c++",
    rb: "ruby",
    swift:"swift by apple"
}

for (const key in myobj) {
console.log(`values of object are ${myobj[key]}`)
}

myarr = ["js","rb","py","java"]

for (const key in myarr) {
    // console.log(key);
    
    // console.log(myarr[key])
}


// //map not iterable
// const map = new Map()
// map.set('IN',"INDIA")
// map.set('USA',"UNITED STATES OF AMERICA")
// map.set('FR',"FRANCE")
// // console.log(map)

// for (const key in map) {
//     console.log(key);
    
// }