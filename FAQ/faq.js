const content = document.querySelectorAll(".content");

for (let i = 0; i < content.length; i++) {
  content[i].addEventListener("click", (e) => {
    e.target.classList.toggle("changeAfter");
    e.target.nextElementSibling.classList.toggle("active");
  });
}
