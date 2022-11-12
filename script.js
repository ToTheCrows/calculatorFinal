//access outputContainer and all buttons via DOM
const outputContainer = document.querySelector(".output-container");
const buttons = document.querySelectorAll("button");

//Variables for whole calculator process (globally for the sake of ease)
let stringNum = "";
let num = [];
let numCount = 0;
let operator = [];
let operatorCount = 0;



//addEventListener for all buttons with further evaluation
for (let count = 0; count < buttons.length; count++) {
    buttons[count].addEventListener("click", obj => {
        if (buttons[count].classList.contains("number")) {
            addToString(buttons[count].value);
        } else if (buttons[count].classList.contains("operator")) {
            num[numCount]=getNumber(buttons[count].value);
            console.log(num[numCount]);
            numCount++;
            addToString(buttons[count].value);
            getOperators(buttons[count].value);
        } else if (buttons[count].classList.contains("delete")) {
            deleteAll();
        } else {
            operateAll();
        }
    });
}

function operateAll() {

}

//sets obj-values back when "C" button is pressed
function deleteAll() {
    console.log("delete");
    stringNum = "";
    num = [];
    numCount = 0;
    operator = [];
    operatorCount = 0;
    opIndex = [];

}

//adds current button to stringNum for later operations
function addToString(item) {
    console.log("addToString");
    stringNum += item;
    updateOutput();
}

//Calculator Functions
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

//Get Operator of stringNum after Error-Check
function getOperators(item) {
    operator[operatorCount] = item;
    operatorCount++;
}

//Update output-value on screen
function updateOutput() {
    const newOutput = document.querySelector(".output");
    newOutput.textContent = stringNum;
}

//Get last full Number before operator
function getNumber(item) {
    let newString = stringNum;
    console.log(newString);
    if( operatorCount === 0) return Number(newString);
    else{
        return Number(newString.slice(stringNum.lastIndexOf(item)-1));
    }
}