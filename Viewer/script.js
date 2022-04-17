const popup = document.querySelector(".popups");

setInterval(() => {
  popup.classList.add("show");
}, 5000);

setInterval(() => {
  popup.classList.remove("show");
}, 10000);
