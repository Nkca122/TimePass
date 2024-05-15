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

//Adding a category
let categoryBtn = document.querySelector(".categoryBtn");
categoryBtn.addEventListener("click", ()=>{
    let newCategory = prompt("Enter the name for the category");
    if(newCategory){
        console.log(newCategory);
        
        for(fieldSet of fieldSets){
            let categoryCheckbox = document.createElement("input");
                categoryCheckbox.value = newCategory;
                categoryCheckbox.name = newCategory;
                categoryCheckbox.id = newCategory;
                categoryCheckbox.type = "checkbox";
            fieldSet.insertAdjacentElement("afterbegin", categoryCheckbox);
            let categoryLabel = document.createElement("label");
                categoryLabel.for = newCategory;
                categoryLabel.textContent = newCategory;
            fieldSet.insertAdjacentElement("afterbegin", categoryLabel);
        }
    } else {
        alert("Operation cancelled");
    }
});



