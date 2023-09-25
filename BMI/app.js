const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const heightInput = document.querySelector(".height-input").value;
  const weightInput = document.querySelector(".weight-input").value;
  const output = document.querySelector(".result");
  const error = document.querySelector(".error");
  if (heightInput && weightInput !== "") {
    error.textContent = "";
    const result = (
      weightInput /
      ((heightInput / 100) * (heightInput / 100))
    ).toFixed(2);
    if (result < 18.5) {
      output.textContent = `Under Weight: ${result}`;
    } else if (result >= 18.5 && result < 25) {
      output.textContent = `Normal : ${result}`;
    } else {
      output.textContent = `Over Weight : ${result}`;
    }
  } else {
    output.textContent = "";
    error.textContent = "Please Enter All Inputs";
  }
});
