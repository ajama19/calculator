/* script.js */

//function for dark/light mode
let calcMode = 'light';
let slider = document.querySelector(".slider");
let buttons = document.querySelectorAll("button");
let background = document.querySelector("body");
let screen = document.querySelector(".screen");
let footer = document.querySelector(".footer");

slider.addEventListener('click', () => {
    if (calcMode == 'light') {
        calcMode = 'dark';
        background.style.backgroundColor = '#272222';
        screen.style.backgroundColor = '#574E4E';
        screen.style.color = '#E7E0CF';
        footer.style.backgroundColor = '#574E4E';
        footer.style.color = 'white';
        for (const item of buttons) {
            if (item.className == 'sqrt' || item.className == 'power' || item.className == 'delete' || 
            item.className == 'pi' || item.className == 'percent' || item.className == 'int' || 
            item.className == 'divd' || item.className == 'mult' || item.className == 'sub' 
            || item.className == 'add' || item.className == 'equals') {
                item.style.backgroundColor = '#E7E0CF';
                item.style.color = '#332D2D';
            } else {
                item.style.backgroundColor = '#574E4E';
                item.style.color = '#E7E0CF';
            }
        }
    } else if (calcMode == 'dark') {
        calcMode = 'light';
        background.style.backgroundColor = '#FFFEFC';
        screen.style.backgroundColor = '#E7E0CF';
        screen.style.color = '#332D2D';
        footer.style.backgroundColor = '#E7E0CF';
        footer.style.color = '#332D2D';
        for (const item of buttons) {
            if (item.className == 'sqrt' || item.className == 'power' || item.className == 'delete' || 
            item.className == 'pi' || item.className == 'percent' || item.className == 'int' || 
            item.className == 'divd' || item.className == 'mult' || item.className == 'sub' 
            || item.className == 'add' || item.className == 'equals') {
                item.style.backgroundColor = '#574E4E';
                item.style.color = '#fffaed';
            } else {
                item.style.backgroundColor = '#E7E0CF';
                item.style.color = '#574E4E';
            } 
        }
    } 
}, false);



//functions for calculator operation
let upperDisplay = document.querySelector(".calculations");
let lowerDisplay = document.querySelector(".result");

//math functions

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) { 
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "ERROR: Cannot divide by 0";
    } else {
        return num1 / num2;
    }
}



//operate function

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);

    } else if (operator === '-') {
        return subtract(num1, num2);

    } else if (operator === '*') {
        return multiply(num1, num2);

    } else if (operator === '/') {
        return divide(num1, num2);

    } else if (num2 === undefined) { //if ur missing a function parameter its set to undefined
        console.log('there is no second number');
    }
}


// display buttons
let numberButtons = document.querySelectorAll(".num");
let operatorButtons = document.querySelectorAll(".operation")
let clearButton = document.querySelector(".clear");
let deleteButton = document.querySelector(".delete");
let sqrtButton = document.querySelector(".sqrt");
let exponentButton = document.querySelector(".power");
let percentButton = document.querySelector(".percent");
let integerButton = document.querySelector(".int");
let equalsButton = document.querySelector(".equals");
let piButton = document.querySelector(".pi");

// number buttons
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        lowerDisplay.textContent += numberButtons[i].innerText;
    });
}

// basic operator buttons
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        if (lowerDisplay.innerText === "") {
            lowerDisplay.textContent += "";
        } else if (lowerDisplay.textContent.endsWith('+') || lowerDisplay.textContent.endsWith('-') || lowerDisplay.textContent.endsWith('x') || lowerDisplay.textContent.endsWith('÷')) {
            lowerDisplay.textContent += "";
        } else {
            lowerDisplay.textContent += " " + operatorButtons[i].innerText + " ";
        }
    });
}

// clear button
clearButton.addEventListener('click', () => {
    lowerDisplay.textContent = "";
    upperDisplay.textContent = "";
});

// delete button
deleteButton.addEventListener('click', () => {
    lowerDisplay.textContent = lowerDisplay.textContent.slice(0, lowerDisplay.textContent.length - 1);
});

// square root button
sqrtButton.addEventListener('click', () => {
    // should call evaluate function that applies a square root to an operand
});

// exponent button
exponentButton.addEventListener('click', () => {
    if (lowerDisplay.textContent === "") {
        lowerDisplay.textContent += "";
    } else {
        lowerDisplay.textContent += " " + exponentButton.innerText + " ";
    }
});

// percent button
percentButton.addEventListener('click', () => {
    //should call evaluate function that turns the operand into a percent
});

// positive/negative number button
integerButton.addEventListener('click', () => {
    //implement after 
});

// equals button
equalsButton.addEventListener('click', () => {
    //implement later
});


//for the pi button remember to have the evaluate function convert it to a numeric value
piButton.addEventListener('click', () => {
    if (lowerDisplay.textContent.endsWith('π')) {
        lowerDisplay.textContent += "";
    } else {
        lowerDisplay.textContent += piButton.innerText;
    } 
});


// variables for running the calculator
//let firstOperand = 0;
//let secondOperand = 0;
//let operator = "";

// functions that will make the calculator work 
let allBtns = document.querySelector('.calc-buttons');

//use a class to run the calculator
class Calculator {
    constructor(firstOperand, secondOperand, operator) {
        this.firstOperand = firstOperand;
        this.secondOperand = secondOperand;
        this.operator = operator;
    }

}

//how to start the calculator
//first you enter in a number

//when you click an operator button then that number becomes the first operand and 
//is transferred to the upper screen

//then when you click another number button the op