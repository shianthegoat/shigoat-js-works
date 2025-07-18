let celsiusRadio = document.getElementById("celsius");
let fahrenheitRadio = document.getElementById("fahrenheit");
let kelvinRadio = document.getElementById("kelvin");
let rankineRadio = document.getElementById("rankine");
let convertButton = document.getElementById("convert");
let tempInput = document.getElementById("tempInput");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");

convertButton.onclick = function() {
    let temp = parseFloat(tempInput.value);
    if (isNaN(temp)) {
        alert("Please enter a valid number.");
        return;
    }

    if (celsiusRadio.checked) {
        result1.textContent = `${temp} °C = ${(temp * 9/5) + 32} °F`;
        result2.textContent = `${temp} °C = ${temp + 273.15} K`;
        result3.textContent = `${temp} °C = ${(temp + 273.15) * 9/5} °R`;
    } else if (fahrenheitRadio.checked) {
        result1.textContent = `${temp} °F = ${(temp - 32) * 5/9} °C`;
        result2.textContent = `${temp} °F = ${(temp - 32) * 5/9 + 273.15} K`;
        result3.textContent = `${temp} °F = ${((temp - 32) * 5/9 + 273.15) * 9/5} °R`;
    } else if (kelvinRadio.checked) {
        result1.textContent = `${temp} K = ${temp - 273.15} °C`;
        result2.textContent = `${temp} K = ${(temp - 273.15) * 9/5 + 32} °F`;
        result3.textContent = `${temp} K = ${temp * 9/5} °R`;
    } else if (rankineRadio.checked) {
        result1.textContent = `${temp} °R = ${(temp - 491.67) * 5/9 + 273.15} K`;
        result2.textContent = `${temp} °R = ${(temp - 491.67) * 5/9 + 32} °F`;
        result3.textContent = `${temp} °R = ${(temp - 491.67) * 5/9 + 273.15 - 273.15} °C`;
    }
}