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



//display components
let upperDisplay = document.querySelector(".calculations");
let lowerDisplay = document.querySelector(".result");


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

// number button event listeners
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        lowerDisplay.textContent += numberButtons[i].innerText;
    });
}

// operator button event listeners
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





//use a class to run the calculator
class Calculator {
    constructor() {
        this.firstOperand = 0;
        this.secondOperand = 0;
        this.operator = "";
    }

    updateDisplay() {

    }

    operate() {

    }

    add() {

    }

    subtract() {

    }

    multiply() {

    }

    divide() {

    }



}
const calc = new Calculator();
