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

// variables



// number button event listeners
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        calculator.updateDisplay(numberButtons[i]);
    });
}

// operator button event listeners
// basic operator buttons 
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        calculator.updateDisplay(operatorButtons[i]);
    });
}

// clear button
clearButton.addEventListener('click', () => {
    //lowerDisplay.textContent = "";
    //upperDisplay.textContent = "";
    calculator.updateDisplay(clearButton);
});

// delete button
deleteButton.addEventListener('click', () => {
    calculator.updateDisplay(deleteButton);
    //lowerDisplay.textContent = lowerDisplay.textContent.slice(0, lowerDisplay.textContent.length - 1);
});

// square root button
sqrtButton.addEventListener('click', () => {
    calculator.updateDisplay(sqrtButton);
});

// exponent button
exponentButton.addEventListener('click', () => {
    calculator.updateDisplay(exponentButton);
});

// percent button
percentButton.addEventListener('click', () => {
    //should call evaluate function that turns the operand into a percent
    calculator.updateDisplay(percentButton);
});

// positive/negative number button
integerButton.addEventListener('click', () => {
    //implement after 
    calculator.updateDisplay(integerButton);
});

// equals button
equalsButton.addEventListener('click', () => {
    //implement later
    calculator.equals(equalsButton);
});

//for the pi button remember to have the evaluate function convert it to a numeric value
piButton.addEventListener('click', () => {
    calculator.updateDisplay(piButton);
});



//use a class to run the calculator
class Calculator {
    constructor() {
        this.firstOperand = "";
        this.secondOperand = "";
        this.operator = "";
    }

    checkDisplay(button) {
        
    }

    //when you click a button it should update the display
    //
    updateDisplay(button) {
        //NOTE: try making a checkDisplay function. This will check the display for operators
        //if one is present and you press another then evaluate

        //or have checkDisplay only do a check when an operator is pressed. check to see if there are 3 things 
        //in the lower display and if there are and an operator is pressed then evaluate
        this.firstOperand = this.secondOperand;
        
        this.checkDisplay(button);

        switch(button.className) {
            case "sqrt":
                //first check if there is only one item, then apply square root
                //if no items dont do anything
                //if more than one item dont do anything
                console.log(button.innerText);
                break;

            case "power":
                console.log(button.innerText);
                break;

            case "delete": 
                lowerDisplay.textContent = lowerDisplay.textContent.slice(0, lowerDisplay.textContent.length - 1);
                break;

            case "clear":
                lowerDisplay.textContent = "";
                upperDisplay.textContent = "";
                break;

            case "pi":
                console.log(button.innerText);
                break;

            case "percent":
                console.log(button.innerText);
                break;

            case "int":
                console.log(button.innerText);
                break;

            case "divd operation":
                    lowerDisplay.textContent += ' ÷ ';
                    break;

            case "seven num":
                lowerDisplay.textContent += '7';
                break;

            case "eight num":
                lowerDisplay.textContent += '8';
                break;

            case "nine num":
                lowerDisplay.textContent += '9';
                break;

            case "mult operation":
                    lowerDisplay.textContent += ' x ';
                    break;

            case "four num":
                lowerDisplay.textContent += '4';
                break;
    
            case "five num":
                lowerDisplay.textContent += '5';
                break;
    
            case "six num":
                lowerDisplay.textContent += '6';
                break;

            case "sub operation":
                    lowerDisplay.textContent += ' - ';
                    break;

            case "one num":
                lowerDisplay.textContent += '1';
                break;
    
            case "two num":
                lowerDisplay.textContent += '2';
                break;
    
            case "three num":
                lowerDisplay.textContent += '3';
                break;

            case "add operation":

                lowerDisplay.textContent += ' + ';
                break;

            case "zero num":
                lowerDisplay.textContent += '0';
                break;

            case "dot operation":
                //if the item before is a dot then dont add it
                lowerDisplay.textContent += '.';
                break;
        }
    }

    operate(num1, num2, operator) {
        switch(operator) {
            case '*':
                multiply(num1, num2);
        }
    }

    add(num1, num2) {
        return num1+num2;
    }

    subtract(num1, num2) {
        return num1-num2;
    }

    multiply(num1, num2) {
        return num1*num2;
    }

    divide(num1, num2) {
        return num1/num2;
    }

    evaluate() {
        //called when the equals button is pressed or when the display has 3 items
        console.log("evaluated");
    }

}

const calculator = new Calculator();


//let length = this.checkDisplayLength();
        //if (length === 3 && (button !== clearButton && button !== deleteButton)) {
            //this.evaluate();
            //return "evaluated";
        //}


//checkDisplayLength() {
    //let arr = lowerDisplay.textContent.split(" ");
    //if (arr[arr.length-1] === "") {
        //arr.pop();
   // }
    //return arr.length;
//}