const display = document.getElementById('display');
const buttons = document.querySelectorAll("button");

let firstOperand = null;
let currentOperator = null;
let shouldResetDisplay = false;
let currentInput = "";

// Basic operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    alert(`Cannot divide by zero!`);
    return 0;
  }
  return a / b;
};

function operate(a, b, operator) {
  switch(operator) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "*": return multiply(a, b);
    case "/": return divide(a, b);
    default: return null;
  }
}

// Update display safely
function updateDisplay(value) {
  display.textContent = value.length > 12 ? value.slice(0,12) : value;
}

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Clear
    if (value === "C") {
      currentInput = "";
      firstOperand = null;
      currentOperator = null;
      shouldResetDisplay = false;
      updateDisplay("0");
      return;
    }

    // Decimal
    if (value === ".") {
      if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay(currentInput);
      }
      return;
    }

    // Toggle sign
    if (value === "±" || value === "+/-") {
      if (currentInput !== "") {
        currentInput = (Number(currentInput) * -1).toString();
        updateDisplay(currentInput);
      }
      return;
    }

    // Percentage
    if (value === "%") {
      if (currentInput !== "") {
        currentInput = (Number(currentInput) / 100).toString();
        updateDisplay(currentInput);
      }
      return;
    }

    // Operator
    if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput === "") return;
      firstOperand = Number(currentInput);
      currentOperator = value;
      updateDisplay(`${firstOperand} ${currentOperator}`);
      shouldResetDisplay = true;
      return;
    }

    // Equals
    if (value === "=") {
      if (currentOperator === null || currentInput === "") return;
      const secondOperand = Number(currentInput);
      const result = operate(firstOperand, secondOperand, currentOperator);
      currentInput = result.toString();
      updateDisplay(currentInput);
      firstOperand = result;
      currentOperator = null;
      shouldResetDisplay = true;
      return;
    }

    // Number input
    if (!isNaN(value)) {
      if (shouldResetDisplay) {
        currentInput = "";
        shouldResetDisplay = false;
      }
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});
