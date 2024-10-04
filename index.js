const display = document.getElementById("display"); 
let firstNumber = null;  
let operator = null;     
let operatorPressed = false;  

function appendToDisplay(input) {
   
    if (operatorPressed && !isNaN(input)) {
        display.value = input;
        operatorPressed = false;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
    firstNumber = null;
    operator = null;
    operatorPressed = false;
}

function calculate() {
    try {
        if (firstNumber !== null && operator !== null) {
            const secondNumber = parseFloat(display.value);
            let result;
            switch (operator) {
                case '+':
                    result = firstNumber + secondNumber;
                    break;
                case '-':
                    result = firstNumber - secondNumber;
                    break;
                case '*':
                    result = firstNumber * secondNumber;
                    break;
                case '/':
                    result = firstNumber / secondNumber;
                    break;
                default:
                    result = secondNumber;
            }
            display.value = result;
            firstNumber = result;  
            operator = null;
        }
    } catch (error) {
        display.value = "Error";
    }
}

document.querySelectorAll(".operator-btn").forEach(btn => {
    btn.addEventListener('click', (event) => {
        if (firstNumber === null) {
            firstNumber = parseFloat(display.value); 
        } else {
            calculate();  
        }
        operator = event.target.textContent;  
        operatorPressed = true;  
    });
});

