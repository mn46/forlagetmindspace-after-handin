const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".hamburgerlinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})