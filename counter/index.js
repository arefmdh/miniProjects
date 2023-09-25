const btns = document.querySelectorAll(".btn");
const count = document.querySelector(".container>h1>span");
let countValue = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const classes = btn.classList;
    if (classes.contains("btn--plus")) countValue++;
    else if (classes.contains("btn--minus")) countValue--;
    else countValue = 0;
    if (countValue > 0) count.style.color = "green";
    else count.style.color = "red";
    count.textContent = countValue;
  });
});
