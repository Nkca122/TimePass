//Checking the number of questions
let fieldSets = document.querySelectorAll("fieldset");
let num = fieldSets.length;
let sum;
function updateSum(){
    sum = 0;
    for(let selected of document.querySelectorAll("input[type = 'radio']:checked")){
     if(selected.parentElement.lastElementChild.previousElementSibling.checked && selected.parentElement.lastElementChild.textContent == 'Reverse'){
        sum+= 6 - selected.value * 1;
     } else {
        sum+= selected.value * 1;
     }
        
    }
    let ans = document.querySelector("textarea");
    ans.textContent = `${sum}`;
}


for(let i = 0; i<num; i++){
    let radioBtns = fieldSets[i].querySelectorAll(`input[name = '${i}']`);
    // console.log(radioBtns);
    result = 0;
    for(let radioBtn of radioBtns){
        radioBtn.addEventListener("change", ()=>{
            // console.log("Answer Changed", radioBtn);
            updateSum();
        });
    }
}

