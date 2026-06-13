// Immediately Invoked Function Express 

(function chai(){
    // named iifee
    console.log('DB Connected');
})();

( (name)=>{
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
}) ('aparmit')

// (defination)(execution)