const display = document.getElementById('display');
const buttons = document.querySelectorAll("button");
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetDisplay = false;
let currentInput = "";

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return Math.floor(a * b);
};

const divide = (a, b) => {
  if (b === 0) {
    alert(`Cannot Divide by ${b}!! \n You IDiot`);
  }
  return a / b;
};

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

// Logic for buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      secondOperand = Number(currentInput);
      const result = operate(firstOperand, secondOperand, currentOperator);
      display.textContent = result;
      firstOperand = result;
      shouldResetDisplay = true;
    }

    if(value === "."){
      if(!currentInput.includes(".")){
        currentInput += ".";
        display.textContent = currentInput;
      }
    }
    if(["+", "-", "*", "/"].includes(value)){
      firstOperand = Number(currentInput);
      currentOperator = value;
      display.textContent = firstOperand + " " + currentOperator;
      shouldResetDisplay = true;
    }
    if (!isNaN(value)) {
      if (shouldResetDisplay) {
        currentInput = "";
        shouldResetDisplay = false;
      }
      // If it's a number
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === "C") {
      currentInput = "";
      display.textContent = "0";
    }
  })
});
