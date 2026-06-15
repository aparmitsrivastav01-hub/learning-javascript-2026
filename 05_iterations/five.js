const coding = ["js",'ruby','java','pyhton','c++']

// coding.forEach( function (item){console.log(item);
// } )

// coding.forEach((item) => {console.log(item);
// })


// function printMe(item){
//     console.log(item);    
// }

// coding.forEach(printMe)

// coding.forEach((item,idex,arr)=>{
//     console.log(item,index,arr);
    
// })

const mycoding = [
    {
        languagename : "javascript",
        languagefilename  : "js",
    },
    {
        languagename : "cpp",
        languagefilename : "c++"
    },
    {
        languagename : "python",
        languagefilename : "py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagename);    
})