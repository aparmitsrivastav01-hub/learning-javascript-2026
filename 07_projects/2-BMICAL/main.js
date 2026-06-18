const form = document.querySelector('form')
const allp = document.querySelectorAll('p')



form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results");
    if(height <=0 || isNaN(height)|| height === ''){
        results.innerHTML = `invalid ${height}`
    }else if(weight <=0 || isNaN(weight)|| weight === ''){
        results.innerHTML = `invalid ${weight}`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = bmi
    }
    const results_comment = document.querySelector("#results-comment");
    
    if (results.innerHTML<=18.6){
        results_comment.innerHTML = "UnderWeight";
    }else if(results.innerHTML>18.6 && results.innerHTML<24.9){
        results_comment.innerHTML = "Normal Range"
    }else{results_comment.innerHTML = "OverWeight"}
})