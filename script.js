let a = 4;
let b = 7;
let operator = "-";

console.log(operate(a, b, operator));



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