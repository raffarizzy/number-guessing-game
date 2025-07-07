let choosenNumber = Math.floor(Math.random() * 101) + 1;
let inputField = document.getElementById("inputField");
let guessBtn = document.getElementById("guessBtn");
let result = document.getElementById("result");
const winSound = document.getElementById("winSound");
let gameStateWin = false;
let inputedNumber = 0;


inputField.addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, "");
})

guessBtn.onclick = function() {
    if (gameStateWin) return;
    
    inputedNumber = Number(inputField.value);
    if (inputedNumber == choosenNumber) {
        result.innerHTML = "CORRECT!" + "<br>" + "REFRESH TO TRY AGAIN!";
        winSound.play();
        gameStateWin = true;
    }

    if(inputedNumber > choosenNumber) {
        result.textContent = "LOWER!";
    }

    if (inputedNumber < choosenNumber) {
        result.textContent = "HIGHER!";
    }
}