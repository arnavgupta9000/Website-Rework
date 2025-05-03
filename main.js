document.addEventListener("DOMContentLoaded", () =>  {
    
    let hamburgerMenu = document.getElementById("hamburger-menu");
    let hamburgerNavLinks = document.querySelector("#main-nav ul");
    hamburgerMenu.addEventListener("click", () => {
        hamburgerNavLinks.classList.toggle("show");  
    });

    let toggleLink = document.getElementById("toggle-more");
    let moreContent = document.getElementById("more-about");

    toggleLink.addEventListener("click", function () {
    let isHidden = moreContent.style.display == "none" || moreContent.style.display == "";

    if (isHidden) {
      moreContent.style.display = "block";
      moreContent.classList.add("hidden-text"); // trigger animation
      toggleLink.textContent = "Show Less";
    } else {
      moreContent.style.display = "none";
      toggleLink.textContent = "Show More";
    }
    });

    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("#main-nav ul li a");
    // #main-nav -> ul -> li -> a, ie only get the a tags inside li tags inside ul tags inside the id main-nav

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const targetId = link.id.replace("-link", ""); // searches for "-link" and changes it with "" -> gives our actual link id's

            // hide all sections
            sections.forEach(section => {
                section.style.display = "none";
                section.style.opacity = 0;
            });

            // remove active class from all nav links
            navLinks.forEach(link => link.classList.remove("active"));

            // show the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "block";
                void targetSection.offsetWidth; // forces a "repaint/reflow" of the DOM so the animation restarts correctly
                targetSection.style.animation = "fadeIn 0.4s ease-in forwards";
            }

            // Highlight the current nav item
            link.classList.add("active");
        });
    });


    


});
