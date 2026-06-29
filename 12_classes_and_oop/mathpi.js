const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);


// const myNewObject = Object.create(null)

const chai = {
    name: "Ginger Chai",
    price: 40,
    isAvailable: true,
    
    orderChai: function(){
        console.log("malik code ki ma chud gayi")
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai , "name",{
    writeable: false,
    enumerable:  false
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value == "function"){
        continue
    }
    console.log(key,value);
    
}
