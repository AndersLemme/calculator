let a = 4;
let b = 7;
let operator = "-";

let sum = 0

console.log(operate(a, b, operator));
const result = document.querySelector(".result");
result.value = sum;


const one_btn = document.querySelector(".one");
one_btn.addEventListener("click", () => { 
    sum += 1;
    result.value = sum;
});
const two_btn = document.querySelector(".two");
two_btn.addEventListener("click", () => { 
    sum += 2;
    result.value = sum;
});
const three_btn = document.querySelector(".three");
three_btn.addEventListener("click", () => { 
    sum += 3;
    result.value = sum;
    });
const four_btn = document.querySelector(".four");
four_btn.addEventListener("click", () => { 
    sum += 4;
    result.value = sum;
});
const five_btn = document.querySelector(".five");
five_btn.addEventListener("click", () => { 
    sum += 5;
    result.value = sum;
});
const six_btn = document.querySelector(".six");
six_btn.addEventListener("click", () => { 
    sum += 6;
    result.value = sum;
});
const seven_btn = document.querySelector(".seven");
seven_btn.addEventListener("click", () => { 
    sum += 7;
    result.value = sum;
});
const eight_btn = document.querySelector(".eight");
eight_btn.addEventListener("click", () => { 
    sum += 8;
    result.value = sum;
});
const nine_btn = document.querySelector(".nine");
nine_btn.addEventListener("click", () => { 
    sum += 9;
    result.value = sum;
});
const zero_btn = document.querySelector(".zero");
zero_btn.addEventListener("click", () => { 
    sum += 0;
    result.value = sum;
});

function operate(a, b, operator){
    //ans = 0;
    if(operator == "+"){
        return add(a, b)
    }else if (operator == "-"){
        return substract(a, b)
    }else if (operator == "*"){
        return multiply(a, b)
    }else if (operator== "/"){
        return multiply(a, b)
    }else{
        return "Error"
    }
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