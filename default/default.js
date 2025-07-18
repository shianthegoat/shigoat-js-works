let emailInput = document.getElementById("email");
let submitButton = document.getElementById("submitButton");
let messageDisplay = document.getElementById("message");
let passwordInput = document.getElementById("password");

submitButton.onclick = () => {

    const email = emailInput.value.trim();
    const validDomains = ["@gmail.com", "@yahoo.com", "@outlook.com"];
    const atIndex = email.indexOf("@");
    const isSingleAt = atIndex > 0 && email.indexOf("@", atIndex + 1) === -1;
    const isValidDomain = validDomains.some(domain => email.endsWith(domain));
    if (isSingleAt && isValidDomain) {
        messageDisplay.innerText = "Valid email address.";
    } else {
        messageDisplay.innerText = "Invalid email address. Please enter a valid email.";
    }
}