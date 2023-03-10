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
    }
}