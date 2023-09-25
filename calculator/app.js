const btns = document.querySelectorAll(".btn");
const output = document.querySelector(".result");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const calculate = (output.value += e.target.value);
    if (e.target.classList.contains("equals")) {
      output.value = eval(calculate);
    } else if (e.target.classList.contains("clear")) {
      output.value = "";
    }
  });
});
