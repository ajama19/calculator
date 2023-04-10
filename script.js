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
numberButtons = document.querySelectorAll(".num");
operatorButtons = document.querySelectorAll(".operation")
clearButton = document.querySelector(".clear");
deleteButton = document.querySelector(".delete");
sqrtButton = document.querySelector(".sqrt");
exponentButton = document.querySelector(".power");
percentButton = document.querySelector(".percent");
integerButton = document.querySelector(".int");
equalsButton = document.querySelector(".equals");
piButton = document.querySelector(".pi");

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        lowerDisplay.textContent += numberButtons[i].innerText;
    });
}


for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        if (lowerDisplay.innerText === "") {
            lowerDisplay.textContent += "";
        } else if (lowerDisplay.textContent.endsWith('+') || lowerDisplay.textContent.endsWith('-') || lowerDisplay.textContent.endsWith('x') || lowerDisplay.textContent.endsWith('÷')) {
            lowerDisplay.textContent += "";
        } else {
            lowerDisplay.textContent += operatorButtons[i].innerText;
        }
    });
}

clearButton.addEventListener('click', () => {
    lowerDisplay.textContent = "";
    upperDisplay.textContent = "";
});


//for the pi button remember to have the evaluate function convert it to a numeric value
piButton.addEventListener('click', () => {
    if (lowerDisplay.textContent.endsWith('π')) {
        lowerDisplay.textContent += "";
    } else {
        lowerDisplay.textContent += piButton.innerText;
    }
    
});
