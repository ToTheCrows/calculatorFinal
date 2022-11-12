//access outputContainer and all buttons via DOM
const outputContainer = document.querySelector(".output-container");
const buttons = document.querySelectorAll("button");

//Variables for whole calculator process (globally for the sake of ease)
let stringNum = "";
let num = [];
let numCount = 0;
let operator = [];
let operatorCount = 0;
let temp=0;


//addEventListener for all buttons with further evaluation
for (let count = 0; count < buttons.length; count++) {
    buttons[count].addEventListener("click", obj => {
        if( stringNum ==="ERROR" ) deleteAll(); 
        if (buttons[count].classList.contains("number")) {
            addToString(buttons[count].value);
        } else if (buttons[count].classList.contains("operator")) {
            num[numCount] = getNumber(buttons[count].value);
            numCount++;
            addToString(buttons[count].value);
            getOperators(buttons[count].value);
        } else if (buttons[count].classList.contains("delete")) {
            deleteAll();
            updateOutput();
        } else {
            num[numCount] = getNumber(buttons[count].value);
            numCount++;
            operateAll();
            updateOutput();
        }
    });
}

function operateAll() {
    let temp=num[0];
    let sum=0;

    if( isNaN(num[numCount-1])) {
        stringNum = "ERROR";
            updateOutput();
            return;
    }

    for( let n=1; n < numCount; n++) {
        console.log("inside for loop");
        console.log(operator[n-1]);
        switch ( operator[n-1] ) {
            case "+":
                temp=add(temp,num[n]);
            break;
            case "-":
                temp=sub(temp,num[n]);
            break;
            case "*":
               temp=multiply(temp,num[n]);
            break;
            case "/":
                temp=divide(temp,num[n]);
            break;
        }
    }
    deleteAll();
    num[0]=temp;
    stringNum=temp.toString();
    console.log(num);
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
    let errorEval = stringNum[stringNum.length - 2];
    switch (errorEval) {
        case "+":
            stringNum = "ERROR";
            updateOutput();
            deleteAll();
            break;
        case "-":
            stringNum = "ERROR";
            updateOutput();
            deleteAll();
            break;
        case "*":
            stringNum = "ERROR";
            updateOutput();
            deleteAll();
            break;
        case "/":
            stringNum = "ERROR";
            updateOutput();
            deleteAll();
            break;
        default:
            operator[operatorCount] = item;
            operatorCount++;

    }
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
    if (operatorCount === 0) return Number(newString);

    console.log(newString.slice(stringNum.lastIndexOf(item)));
    return Number(newString.slice(stringNum.lastIndexOf(item)));
}