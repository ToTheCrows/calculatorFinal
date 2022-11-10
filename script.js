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

//addEventListener for all buttons with further evaluation
for(let count=0;count<buttons.length;count++) {
    buttons[count].addEventListener("click", obj => {
        if( buttons[count].value === "=") operateAll();
        else if( buttons[count].value === "c" ) deleteAll();
        else addToString(buttons[count].value);
    });
}

function operateAll() {
    evaluator(stringNum);

}

//sets obj-values back when "C" button is pressed
function deleteAll() {
    console.log("delete");
    obj = {
        stringNum:"",
        num1:null,
        num2:null,
        operator:"",
        output:""
    }
    console.log(obj);

}

//adds current button to stringNum for later operations
function addToString(item) {
    console.log("addToString");
    obj.stringNum += item;
    console.log(obj.stringNum);
}

//Calculator Functions
function add() {
    return obj.num1+obj.num2;
}

function sub() {
    return obj.num1-obj.num2;
}

function multiply() {
    return obj.num1*obj.num2;
}

function divide() {
    return obj.num1/obj.num2;
}

//Evaluator function to find and return operator into obj.operator
function evaluator() {
    //ERROR evaluation if more than one operator
    let array = ["+","-","*","/"];
    let errorcounter=0;
    
    //check through stringNum for multiple operators and return to operateAll
    for(let counter=0;counter < array.length;counter++) {
        errorcounter=obj.stringNum.filter( x => x==array[count]).length
        if(errorcounter>1) {
            return -1;
        }
    }
    return 1;
}