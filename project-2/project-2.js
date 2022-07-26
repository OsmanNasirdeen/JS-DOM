const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const modelContainer = document.querySelector(".model");

openBtn.addEventListener("click", () => {
  modelContainer.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modelContainer.style.display = "none";
});
