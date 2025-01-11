const Btnletters = document.querySelectorAll(".button")
const Mix = document.getElementsByClassName("mix-btn")
const Result = document.querySelector(".result-window")
const CheckBtn = document.querySelector(".check-btn")
let currentWord = "";


const letter = ["C", "H", "Y", "E", "O", "L", "M", "R", "W", "Z", "U", "G", "B", "I", "Q", "X"];


function addLettersToResult() {
    Result.value = currentWord.toLocaleLowerCase();
}

Btnletters.forEach(button => {
    button.addEventListener("click", () => {
        currentWord += button.innerText;
        addLettersToResult()
        // console.log(currentWord); 
    });
});

CheckBtn.addEventListener("click", () => {
    Result.value = ""
})

mix