let span = document.querySelectorAll('span');
//Get all the span elements into NodeList
// console.log(span);


const onKeyPress = (e) => {
    for(let i = 0; i < span.length;i++){
        if(i === 0){
            // If element = e.key box
            span[i].textContent = e.key;
        }
        else if(i===1){
            //If element = e.keyCode box
            span[i].textContent = e.keyCode;
        }
        else if(i===2){
            //If element = e.code box
            span[i].textContent = e.code;
        }
    }

};

document.addEventListener('keypress', onKeyPress);