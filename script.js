
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

document.getElementById("hamburger-menu").addEventListener("click", toggleMenu);
