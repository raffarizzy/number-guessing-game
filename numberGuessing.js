let choosenNumber = Math.floor(Math.random() * 101) + 1;
let inputField = document.getElementById("inputField");
let guessBtn = document.getElementById("guessBtn");
let result = document.getElementById("result");
let inputedNumber = 0;

inputField.addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, "");
})

guessBtn.onclick = function() {
    inputedNumber = Number(inputField.value);
    
    if (inputedNumber == choosenNumber) {
        result.textContent = "CORRECT!";
    }

    if(inputedNumber > choosenNumber) {
        result.textContent = "LOWER!";
    }

    if (inputedNumber < choosenNumber) {
        result.textContent = "HIGHER!";
    }
}