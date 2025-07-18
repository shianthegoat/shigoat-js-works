let emailInput = document.getElementById("emailInput");
let submitButton = document.getElementById("submitButton");
let messageDisplay = document.getElementById("message");
let passwordInput = document.getElementById("password");

submitButton.onclick = () => {

    if (
        emailInput.value.includes("@gmail.com") ||
        emailInput.value.includes("@yahoo.com") ||
        emailInput.value.includes("@outlook.com")
    ) {
        messageDisplay.innerText = "Valid email address.";
    } else {
        messageDisplay.innerText = "Invalid email address. Please enter a valid email.";
    }
}