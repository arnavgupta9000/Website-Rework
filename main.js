document.addEventListener("DOMContentLoaded", () =>  {
    let hamburgerMenu = document.getElementById("hamburger-menu");
    let navLinks = document.querySelector("#main-nav ul");
    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("show");  
    });
});
