
    function darkTheme() {
   var element = document.body;
    element.classList.toggle("dark-mode");
}
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
const modal = document.getElementById("projectModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
