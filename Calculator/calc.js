let currentInput = "";
let display = document.getElementById("display");

function updateDisplay() {
  display.innerText = currentInput || "0";
}

document.getElementById("zeroBtn").onclick = () => append("0");
document.getElementById("oneBtn").onclick = () => append("1");
document.getElementById("twoBtn").onclick = () => append("2");
document.getElementById("threeBtn").onclick = () => append("3");
document.getElementById("fourBtn").onclick = () => append("4");
document.getElementById("fiveBtn").onclick = () => append("5");
document.getElementById("sixBtn").onclick = () => append("6");
document.getElementById("sevenBtn").onclick = () => append("7");
document.getElementById("eightBtn").onclick = () => append("8");
document.getElementById("nineBtn").onclick = () => append("9");

document.getElementById("additionBtn").onclick = () => append("+");
document.getElementById("subtractionBtn").onclick = () => append("-");
document.getElementById("multiplicationBtn").onclick = () => append("*");
document.getElementById("divisionBtn").onclick = () => append("/");

document.getElementById("decimalBtn").onclick = () => append(".");
document.getElementById("percentageButton").onclick = () => append("%");

document.getElementById("clearBtn").onclick = () => {
  currentInput = "";
  updateDisplay();
};

document.getElementById("backspaceBtn").onclick = () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
};

document.getElementById("equalsBtn").onclick = () => {
  try {
    const expression = currentInput.replace(/%/g, "/100");
    currentInput = eval(expression).toString();
    updateDisplay();
  } catch {
    currentInput = "Error";
    updateDisplay();
  }
};

function append(char) {
  currentInput += char;
  updateDisplay();
}

updateDisplay();
