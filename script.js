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
one_btn.addEventListener("click", () => { 
    display += "1";
    result.value = display;
});
const two_btn = document.querySelector(".two");
two_btn.addEventListener("click", () => { 
    display += "2";
    result.value = display;
});
const three_btn = document.querySelector(".three");
three_btn.addEventListener("click", () => { 
    display += "3";
    result.value = display;
    });
const four_btn = document.querySelector(".four");
four_btn.addEventListener("click", () => { 
    display += "4";
    result.value = display;
});
const five_btn = document.querySelector(".five");
five_btn.addEventListener("click", () => { 
    display += "5";
    result.value = display;
});
const six_btn = document.querySelector(".six");
six_btn.addEventListener("click", () => { 
    display += "6";
    result.value = display;
});
const seven_btn = document.querySelector(".seven");
seven_btn.addEventListener("click", () => { 
    display += "7";
    result.value = display;
});
const eight_btn = document.querySelector(".eight");
eight_btn.addEventListener("click", () => { 
    display += "8";
    result.value = display;
});
const nine_btn = document.querySelector(".nine");
nine_btn.addEventListener("click", () => { 
    display += "9";
    result.value = display;
});
const zero_btn = document.querySelector(".zero");
zero_btn.addEventListener("click", () => { 
    display += "0";
    result.value = display;
});


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
const add_btn = document.querySelector(".add");
add_btn.addEventListener("click", () => {
    if(operator != ""){
        sum_func();
    }
    operator = "+"
    if(result.value != ""){ //THIS HAS TO BE CHANGED WITH A BOOL OR SOMETHING ELSE.
        calchist.value = result.value + " +";
        calchistvalue = result.value;
        display = ""
    }
    result.value = display;
    cmp = false;
});
const subtract_btn = document.querySelector(".subtract");
subtract_btn.addEventListener("click", () => {
    if(operator != ""){
        sum_func();
    }
    operator = "-"
    if(result.value != ""){  //THIS HAS TO BE CHANGED WITH A BOOL OR SOMETHING ELSE.
        calchist.value = result.value + " -";
        calchistvalue = result.value;
        display = "";
    }
    result.value = display;
    cmp = false;
});
const divide_btn = document.querySelector(".divide");
divide_btn.addEventListener("click", () => {
    if(operator != ""){
        sum_func();
    }
    operator = "/"
    if(result.value != ""){  //THIS HAS TO BE CHANGED WITH A BOOL OR SOMETHING ELSE.
        calchist.value = result.value + " /";
        calchistvalue = result.value;
        display = "";
    }
    result.value = display;
    cmp = false;
});
const multiply_btn = document.querySelector(".multiply");
multiply_btn.addEventListener("click", () => {
    if(operator != ""){
        sum_func();
    }
    operator = "*"
    if(result.value != ""){  //THIS HAS TO BE CHANGED WITH A BOOL OR SOMETHING ELSE.
        calchist.value = result.value + " *";
        calchistvalue = result.value;
        display = ""
    }
    result.value = display;
    cmp = false;
});


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
        // Normal operation
        let a = Number(calchistvalue);
        let b = Number(display);
        result.value = operate(a, b, operator);

        // Store last operation for repeated "="
        lastOperator = operator;
        lastOperand = b;

        calchistvalue = result.value;
        display = "";
        operator = "";
    } else if (lastOperator !== "" && lastOperand !== "") {
        // Repeat last operation
        let a = Number(result.value);
        result.value = operate(a, Number(lastOperand), lastOperator);
        calchistvalue = result.value;
    }
    cmp = false;
}
/*
function sum_func(){
    sum = Number(display);
    result.value = operate(Number(result.value), Number(calchistvalue), operator);//operate(Number(calchistvalue), Number(result.value), operator);
    cmp = false;
    operator = "";  
}*/

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
    return b/a;
}