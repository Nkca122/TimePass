//Checking the number of questions
let fieldSets = document.querySelectorAll("fieldset");
let num = fieldSets.length;
let sum;
function update(){
    sum = 0;
    for(let selected of document.querySelectorAll("input:checked")){
        sum+=selected.value * 1;
    }
    console.log(sum);
}


for(let i = 0; i<num; i++){
    let radioBtns = fieldSets[i].querySelectorAll(`input[name = '${i}']`);
    // console.log(radioBtns);
    result = 0;
    for(let radioBtn of radioBtns){
        radioBtn.addEventListener("change", ()=>{
            console.log("Answer Changed", radioBtn);
            update();
        });
    }
}

