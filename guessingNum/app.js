const btn = document.querySelector(".btn");
const input = document.querySelector(".number-input");
const preGuessesCenter = document.querySelector(".pre-guess");
const remainingGuesses = document.querySelector(".remaining-guesses");
const output = document.querySelector(".result");

const randomNum = Math.round(Math.random() * 100);
let remainedGuess = 10;
console.log(randomNum);

btn.addEventListener("click", () => {
  const guessedNum = input.value;
  if (input.value !== "" && remainedGuess > 0) {
    input.value = "";
    const gap = randomNum - guessedNum;
    if (gap > 0 && gap >= 20) {
      output.innerText = "Try Much Bigger";
    } else if (gap > 0 && gap < 20) {
      output.innerText = "Try Bigger";
    } else if (gap < 0 && gap <= -20) {
      output.innerText = "Try much smaller";
    } else if (gap < 0 && gap > -20) {
      output.innerText = "Try smaller";
    } else {
      output.innerText = `You Guessed Right!
      Right Answer: ${randomNum}
      `;
      input.readOnly = true;
      btn.disabled = true;
    }
    remainedGuess--;
  } else if (remainedGuess === 0) {
    output.innerText = `You don't have anymore guesses!
    the right answer was: ${randomNum}
    `;
    input.readOnly = true;
    btn.disabled = true;
  } else if (input.value === "") {
    output.innerText = "Please Enter a Number";
  }
  const preGuess = document.createElement("div");
  preGuess.innerText = guessedNum;
  preGuessesCenter.appendChild(preGuess);
  remainingGuesses.textContent = `Remaining Guesses: ${remainedGuess}`;
});
