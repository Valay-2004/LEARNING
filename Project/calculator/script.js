let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetDisplay = false;

const add = (dig1, dig2) => {
  return dig1 + dig2;
};

const subtract = (dig1, dig2) => {
  const big = Math.max(dig1, dig2);
  const small = Math.min(dig1, dig2);
  return big - small;
};

const multiply = (dig1, dig2) => {
  return Math.floor(dig1 * dig2);
};

const divide = (dig1, dig2) => {
  if (dig2 === 0) {
    alert(`Cannot Divide by ${dig2}!! \n You IDiot`);
  }
  return dig1/ dig2;
};

function operate(dig1, dig2, operator) {
    
}
