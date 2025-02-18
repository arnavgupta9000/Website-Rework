document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector("#main-nav ul");
    hamburgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("show");  
    });
});
