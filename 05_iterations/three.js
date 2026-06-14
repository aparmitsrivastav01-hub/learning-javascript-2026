// for of

['','','']
[{},{},{}]

const arr =  [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}


let str = "galoooo"
for (const smstr of str) {
    console.log(smstr);
    
}
// object = kiske upar lagana h


// Maps unique 


const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")
console.log(map)

for (const [Key,Value] of map) {
    console.log(Key,":+++++",Value);
}

const object2 = {
    "game1" : "nfs",
    "game2" : "gta",
    "game3" : "valo"
}

// for (const [Key,Value] of object2) {
//     console.log(Key,":+++++",Value);
// } not wokringggggggggggg

