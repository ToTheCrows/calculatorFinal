//access outputContainer and all buttons via DOM
const outputContainer = document.querySelector(".output-container");
const buttons = document.querySelectorAll("button");

//Object for whole calculator process (globally for the sake of ease)
let obj = {
    stringNum:"",
    num1:null,
    num2:null,
    operator:"",
    output:""
}

let evaluator="";

//addEventListener for all buttons with further evaluation
for(let count=0;count<buttons.length;count++) {
    buttons[count].addEventListener("click", evaluator => {
        if( buttons[count].value === "=") return 1;
        else if( buttons[count].value === "c" ) return 2;
        else return 3;
    });
}

console.log(evaluator);