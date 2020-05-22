const button = document.querySelector("button");
let number = 1;

function addDiv(){
    const ul = document.querySelector("ul");
    let element = document.createElement("li");
    element.textContent = number;
    ul.appendChild(element);
    if(number % 3 == 0){
        element.setAttribute("class","big");
    }
    number += 2;
}

button.addEventListener("click",addDiv);