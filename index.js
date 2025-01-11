const Btnletters = document.querySelectorAll(".button")
const Mix = document.querySelector(".mix-btn")
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
    currentWord = ""
})

function randomNum(max) {
    return Math.floor(Math.random() * max);
}

function mixLetters() {
    const allLetters = [
      ["A", "A", "E", "E", "G", "N"],
      ["A", "B", "B", "J", "O", "O"],
      ["A", "C", "H", "O", "P", "S"],
      ["A", "F", "F", "K", "P", "S"],
      ["A", "O", "O", "T", "T", "W"],
      ["C", "I", "M", "O", "T", "U"],
      ["D", "E", "I", "L", "R", "X"],
      ["D", "E", "L", "R", "V", "Y"],
      ["D", "I", "S", "T", "T", "Y"],
      ["E", "E", "G", "H", "N", "W"],
      ["E", "E", "I", "N", "S", "U"],
      ["E", "H", "R", "T", "V", "W"],
      ["E", "I", "O", "S", "S", "T"],
      ["E", "L", "R", "T", "T", "Y"],
      ["H", "I", "M", "N", "U", "Qu"],
      ["H", "L", "N", "N", "R", "Z"],
    ];
   
    Btnletters.forEach((el, i) => {
        const randomIndex = randomNum(allLetters[i].length);
        el.innerText = allLetters[i][randomIndex];
    });
}

Mix.addEventListener("click", () => {
    mixLetters();
});

async function checkWord(currentWord) {
    
}

