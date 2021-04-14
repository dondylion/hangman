const go = document.querySelector("button"),
    game = document.querySelector(".game"),
    inputWord = document.querySelector(".input-word"),
    word = document.querySelector("input"),
    answerWord = document.querySelector(".answer"),
    alphabet = document.querySelector(".alphabet"),
    counter = document.querySelector(".counter");

let userAnswer = [];

const letsGame = (a) => {
    userAnswer = a.split("");
    for(let i=0; i<userAnswer.length; i++) {
        let td = document.createElement("td");
        td.classList.add("bottom-line");
        td.innerText = userAnswer[i];
        answerWord.appendChild(td);
    }
};

go.addEventListener("click", ()=>{
    if (word.value !== '') {
        game.classList.remove("out");
        inputWord.classList.add("out");
        letsGame(word.value);
    }
});

alphabet.addEventListener("click", ()=>{
    let bottomLine = document.querySelectorAll(".bottom-line"),
        n = 1;
    if (!event.target.classList.contains("black"))  {
        if (event.target.tagName === "TD") {
            event.target.classList.add("black");
            for(let i=0; i<userAnswer.length; i++) {
                if (event.target.innerText === userAnswer[i]) {
                    bottomLine[i].classList.add("choosen");
                    n = 0;                   
                }
            }
        }
        if (n===1) {
            counter.innerText -= 1;
            if (counter.innerText === "0") {
                game.classList.add("out");
                alert("GAME OVER");
            }
        }
    }
});