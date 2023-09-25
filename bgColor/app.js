const colorOptions = document.querySelectorAll(".option");
const body = document.querySelector("body");

colorOptions.forEach((color) => {
  color.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.dataset.color;
  });
});
