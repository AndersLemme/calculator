let operator = "";
let display = ""
let cmp = false;


const result = document.querySelector(".result");
result.value = "";
const calchist = document.querySelector(".calchist");
calchist.value = "";
let calchistvalue = "" //this is the value without the operator sign used in the function



//Numbers
const one_btn = document.querySelector(".one");
one_btn.addEventListener("click", () => addNumber("1"));
const two_btn = document.querySelector(".two");
two_btn.addEventListener("click", () => addNumber("2"));
const three_btn = document.querySelector(".three");
three_btn.addEventListener("click", () => addNumber("3"));
const four_btn = document.querySelector(".four");
four_btn.addEventListener("click", () => addNumber("4"));
const five_btn = document.querySelector(".five");
five_btn.addEventListener("click", () => addNumber("5"));
const six_btn = document.querySelector(".six");
six_btn.addEventListener("click", () => addNumber("6"));
const seven_btn = document.querySelector(".seven");
seven_btn.addEventListener("click", () => addNumber("7"));
const eight_btn = document.querySelector(".eight");
eight_btn.addEventListener("click", () => addNumber("8"));
const nine_btn = document.querySelector(".nine");
nine_btn.addEventListener("click", () => addNumber("9"));
const zero_btn = document.querySelector(".zero");
zero_btn.addEventListener("click", () => addNumber("0"));


//keyboard inputs
document.addEventListener("keydown", function(event){
    const allowed = "0123456789";
    if (allowed.includes(event.key)){
        addNumber(event.key);
    }
});

function addNumber(char){
    display += char;
    result.value = display;
}

// COMMA
const comma_btn = document.querySelector(".comma");
comma_btn.addEventListener("click", () => {
    if(cmp === false){
    display += "."
    cmp = true;
    result.value = display;
    }
});

// OPERATORS 

//add
const add_btn = document.querySelector(".add");
add_btn.addEventListener("click", () => {
    if(operator != ""){
        sum_func();
    }
    operator = "+"
    if(result.value != ""){
        calchist.value = result.value + " +";
        calchistvalue = result.value;
        display = ""
    }
    result.value = display;
    cmp = false;
});

//subtract
const subtract_btn = document.querySelector(".subtract");
subtract_btn.addEventListener("click", () => {
    if(operator != ""){
        sum_func();
    }
    operator = "-"
    if(result.value != ""){
        calchist.value = result.value + " -";
        calchistvalue = result.value;
        display = "";
    }
    result.value = display;
    cmp = false;
});

//divide
const divide_btn = document.querySelector(".divide");
divide_btn.addEventListener("click", () => {
    if(operator != ""){
        sum_func();
    }
    operator = "/"
    if(result.value != ""){ 
        calchist.value = result.value + " /";
        calchistvalue = result.value;
        display = "";
    }
    result.value = display;
    cmp = false;
});

//multiply
const multiply_btn = document.querySelector(".multiply");
multiply_btn.addEventListener("click", () => {
    if(operator != ""){
        sum_func();
    }
    operator = "*"
    if(result.value != ""){
        calchist.value = result.value + " *";
        calchistvalue = result.value;
        display = ""
    }
    result.value = display;
    cmp = false;
});

//sum
const sum_btn = document.querySelector(".sum");
sum_btn.addEventListener("click", () => {
    sum_func();
})
const remove_btn = document.querySelector(".remove");
remove_btn.addEventListener("click", () =>{
    //check if last char is comma before removing
    let lastChar = display.slice(-1);
    if (lastChar == "."){
        cmp = false;
    }
    display = display.slice(0, -1);
    result.value = display;
})
const clear_btn = document.querySelector(".clear");
clear_btn.addEventListener("click", () =>{
    //reset everything
    operator = "";
    display = ""
    cmp = false;
    result.value = display;
    calchist.value = result.value
    calchistvalue = result.value;
})


function sum_func() {
    if (operator !== "") {
        // First "="
        let a = Number(calchistvalue);
        let b = Number(display);
        let res = operate(a, b, operator);

        result.value = res;

        // History shows only this calculation
        calchist.value = `${a} ${operator} ${b} = ${res}`;

        // Store last operation
        lastOperator = operator;
        lastOperand = b;

        calchistvalue = res;
        display = "";
        operator = "";
    } else if (lastOperator !== "" && lastOperand !== "") {
        // Repeated "="
        let a = Number(result.value);
        let res = operate(a, Number(lastOperand), lastOperator);

        result.value = res;

        // History resets to only the new step
        calchist.value = `${a} ${lastOperator} ${lastOperand} = ${res}`;

        calchistvalue = res;
    }
    cmp = false;
}

//Keyboard input function for operators and comma:
document.addEventListener("keydown", function(event){
    //comma using both "." and ","
    if((event.key === "." || event.key === ",") && cmp === false){
        display += "."
        cmp = true;
        result.value = display;
    }

    //operators
    if(["/", "+", "-", "*"].includes(event.key)){
        if (operator != "") {
            sum_func();
        }
        operator = event.key;
        if (result.value != "") {
            calchist.value = result.value + " " + operator;
            calchistvalue = result.value;
            display = "";
        }
        result.value = display;
        cmp = false;
    }

    // ENTER for "="
    if (event.key === "Enter") {
        sum_func();
    }

    // BACKSPACE for remove
    if (event.key === "Backspace") {
        let lastChar = display.slice(-1);
        if (lastChar == ".") {
            cmp = false;
        }
        display = display.slice(0, -1);
        result.value = display;
    }

    // ESC for clear
    if (event.key === "Escape") {
        operator = "";
        display = "";
        cmp = false;
        result.value = display;
        calchist.value = "";
        calchistvalue = "";
    }
});

function operate(a, b, operator){
    //ans = 0;
    if(operator == "+")  return add(a, b)
    if (operator == "-") return substract(a, b)
    if (operator == "*") return multiply(a, b)
    if (operator== "/") return divide(a, b)
    return "Error"
}

function add(a, b){
    return a + b;
}
function substract(a, b){
    return a - b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}