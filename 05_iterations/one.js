// for loop 


// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     if(i === 4){
//         console.log("4 found ")
//     }
    
// }

for (let i = 1; i<=10 ; i++){
    // console.log(`Outer Loop${i}`)
    for (let j = 1; j < 10; j++) {
        // console.log(`${i}*${j} = ${i*j}`);
    }
}

myArr = ['flash','batman','superman']
for (let i = 0; i < myArr.length ; i++) {
    const element = myArr[i] ;
    // console.log(element)
}

// Break & Continue

for (let i = 0; i <= 20; i++) {
    if (i === 5){
        console.log("5 Found")
        break
    }
    console.log(i);
}
for (let i = 0; i <= 20; i++) {
    if (i === 5){
        console.log("5 Found")
        continue
    }
    console.log(i);
}