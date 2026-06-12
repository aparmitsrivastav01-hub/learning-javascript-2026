a = 300
if (true) {
  let a = 10;
  const b = 20;
  // console.log(`Inner, ${a}`)
}

//block scope andar 
//gloabl scope bahar
// Avoid var


{
  //scope hua ye
}


// console.log(a)
// console.log(c)
// console  k andar scope alag or local par node se scope alag 

function one(){
  const username = "aparmit"

  function two(){
    const website = "youtube"
    // console.log(username);
  }
  // console.log(website);
  two()
}

one()


if(true) {
  const username = "aparmit"
  if (username === "aparmit"){
    const website = "youtube"
    // console.log(username+website)
  }
  // console.log(website);
}

// console.log(username)



// +++++++++++++++++++++++++++++ interesting +++++++++++


addOne(5) // not error
function addOne(num){
  return num + 1
}


addTwo(4) //error
const addTwo = function(num){ //experession
  return num + 2
}

