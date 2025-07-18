<<<<<<< HEAD
// Random Number Generator
const min = 1; // Minimum Value of generation
const max = 10; // Maximum Value of generation

const numDisplay1 = document.getElementById("numDisplay1"); // script attach to the label
const numDisplay2 = document.getElementById("numDisplay2"); // script attach to the label
const numDisplay3 = document.getElementById("numDisplay3"); // script attach to the label
const randomizeBtn = document.getElementById("randomizeBtn"); // script attach to the button

let randomNumber;

randomizeBtn.onclick = function() {
    let randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number between min and max
    let randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number between min and max
    let randomNumber3 = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number between min and max
    numDisplay1.innerText = randomNumber1; // Display the generated number in the label
    numDisplay2.innerText = randomNumber2; // Display the generated number in the label
    numDisplay3.innerText = randomNumber3; // Display the generated number in the label
    // updateCount(randomNumber1, randomNumber2, randomNumber3); // Update the count for the generated number
}

=======
// Random Number Generator
const min = 1; // Minimum Value of generation
const max = 10; // Maximum Value of generation

const numDisplay1 = document.getElementById("numDisplay1"); // script attach to the label
const numDisplay2 = document.getElementById("numDisplay2"); // script attach to the label
const numDisplay3 = document.getElementById("numDisplay3"); // script attach to the label
const randomizeBtn = document.getElementById("randomizeBtn"); // script attach to the button

let randomNumber;

randomizeBtn.onclick = function() {
    randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number between min and max
    randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number between min and max
    randomNumber3 = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number between min and max
    numDisplay1.innerText = randomNumber1; // Display the generated number in the label
    numDisplay2.innerText = randomNumber2; // Display the generated number in the label
    numDisplay3.innerText = randomNumber3; // Display the generated number in the label
    updateCount(randomNumber1, randomNumber2, randomNumber3); // Update the count for the generated number
}

>>>>>>> 21a58941a91c5ac4dd4836deff4b3d21853ce455
