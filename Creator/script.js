const warning = document.querySelector(".warning");
const warn_button = document.getElementById("warn-button");

warn_button.addEventListener("click", () => {
  warning.classList.add("disappear");
});
