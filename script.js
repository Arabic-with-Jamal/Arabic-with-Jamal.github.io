const ham = document.querySelector(".ham");
const nav = document.querySelector(".navigation");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  ham.classList.remove("active");
  nav.classList.remove("active");
}));