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
    const outputVar = document. querySelector(".output");
    let checker = evaluatorError(obj.stringNum);

    console.log(checker);
    if( checker != 1 ) {
        deleteAll();
        outputVar.textContent="ERROR!";
    }
    else {
        obj.operator = getOperator(obj.stringNum);
    }


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

//ERROR evaluation if more than one operator
function evaluatorError(string) {
    let array = ["+","-","*","/"];
    let count = 0;
    array.forEach(element => {
        for( let n=0;n<string.length;n++){
            if(element == string[n]) count++;
        }
    });

    console.log(count);
    return count;
}

//Get Operator of stringNum after Error-Check
function getOperator(string) {
    let array = ["+","-","*","/"];
    let x;
    x=array.forEach(element => {
        for(let n=0;n<string.length;n++) {
            console.log(string[n]);
            console.log(element);
            if( string[n]==element ) return n;
        }
    });
    console.log(array[x]);
    return array[x];
}   