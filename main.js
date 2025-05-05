document.addEventListener("DOMContentLoaded", () =>  {
    
    let hamburgerMenu = document.getElementById("hamburger-menu");
    let hamburgerNavLinks = document.querySelector("#main-nav ul");
    hamburgerMenu.addEventListener("click", () => {
        hamburgerNavLinks.classList.toggle("show");  
    });


    document.querySelectorAll(".toggle-link").forEach(link => {
        link.addEventListener("click", () => {
            const container = link.closest(".toggle-container")
            const moreContent = container.querySelector(".more-content");

            const isHidden = moreContent.style.display === "none" || moreContent.style.display === "";

            if (isHidden) {
              moreContent.style.display = "block";
              link.textContent = "Show Less";
            } else {
              moreContent.style.display = "none";
              link.textContent = "Show More";
            }
        
        });
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

    let flyingInterval;

    function createFlyingSquare(fromEdge) {
        const profileDiv = document.getElementById("profile_div");
        const square = document.createElement("div");
        square.className = "flying-square";

        const size = 20;
        const bounds = profileDiv.getBoundingClientRect();
        const x = Math.random() * bounds.width;
        const y = Math.random() * bounds.height;

        if (fromEdge === "top") {
            square.style.left = `${x}px`;
            square.style.top = `0px`;
        } else if (fromEdge === "bottom") {
            square.style.left = `${x}px`;
            square.style.top = `${bounds.height - size}px`;
        } else if (fromEdge === "left") {
            square.style.left = `0px`;
            square.style.top = `${y}px`;
        } else if (fromEdge === "right") {
            square.style.left = `${bounds.width - size}px`;
            square.style.top = `${y}px`;
        }

        profileDiv.appendChild(square);

        // animate
        requestAnimationFrame(() => {
            square.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`;
            square.style.opacity = "0";
        });

        setTimeout(() => {
            profileDiv.removeChild(square);
        }, 1500); // after 1.5 seconds they disappear
    }

    document.getElementById("profile_div").addEventListener("mouseenter", () => {
        const edges = ["top", "bottom", "left", "right"];
        flyingInterval = setInterval(() => {
            const edge = edges[Math.floor(Math.random() * edges.length)];
            createFlyingSquare(edge);
        }, 200); 
    });

    document.getElementById("profile_div").addEventListener("mouseleave", () => {
        clearInterval(flyingInterval);
    });



});
