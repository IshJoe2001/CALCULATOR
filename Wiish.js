let displayValue = '0';

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementById('display');
  displayElement.textContent = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function appendOperator(operator) {
  if (displayValue !== '0' && !isNaN(parseFloat(displayValue))) {
    displayValue += operator;
    updateDisplay();
  }
}

function calculate() {
  if (displayValue !== '0' && !isNaN(parseFloat(displayValue))) {
    let result;
    try {
      result = eval(displayValue);
    } catch (error) {
      result = 'Error';
    }
    displayValue = result.toString();
    updateDisplay();
  }
}
