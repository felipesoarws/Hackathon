const options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", () => {
    const optionSelected = option.textContent;
    const inputs = document.querySelectorAll(".inputs");
    const image = document.querySelector(".char img");
    const srcImg = image.src;

    if (optionSelected == "Creator") {
      removeItem(options[0], "selected");
      removeItem(inputs[0], "block");

      addItem(options[1], "selected");
      addItem(inputs[1], "block");
      image.src = "images/man.png";
    } else {
      removeItem(options[1], "selected");
      removeItem(inputs[1], "block");

      addItem(options[0], "selected");
      addItem(inputs[0], "block");
      image.src = "images/woman.png";
    }
  });
});

function removeItem(item, classToRmv) {
  item.classList.remove(classToRmv);
}

function addItem(item, classToAdd) {
  item.classList.add(classToAdd);
}

const buttons = document.querySelectorAll(".signIn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const check = button.classList[1];

    if (check == "creator") {
      return (window.location.href = "/Hackathon/Creator/index.html");
    } else {
      return (window.location.href = "https://www.google.com/");
    }
  });
});
