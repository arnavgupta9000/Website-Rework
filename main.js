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

    function showContentById(targetId) {
        const sections = document.querySelectorAll(".section");
        const navLinks = document.querySelectorAll("#main-nav ul li a");

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
            void targetSection.offsetWidth; // Reflow
            targetSection.style.animation = "fadeIn 0.4s ease-in forwards";
        }

        // highlight the current nav item
        const matchingNavLink = document.getElementById(`${targetId}-link`);
        if (matchingNavLink) {
            matchingNavLink.classList.add("active");
        }
    }
    

    const navLinks = document.querySelectorAll("#main-nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const targetId = link.id.replace("-link", "");
            showContentById(targetId);
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


    function copyEmail() {
        const email = document.getElementById("email-text").textContent;
        navigator.clipboard.writeText(email).then(() => {
          const confirmation = document.getElementById("copy-confirmation");
          confirmation.style.display = "inline";
          setTimeout(() => {
            confirmation.style.display = "none";
          }, 1500);
        });
    };

    document.getElementById("copy-button").addEventListener("click", () => {
        copyEmail();
    });

   

    document.getElementById("experience-button-link").addEventListener("click", () => {
        showContentById("experiences");
        window.scrollTo({
            top: 0
        });
        
    });

    document.getElementById("project-button-link").addEventListener("click", () => {
        showContentById("projects");
        window.scrollTo({
            top: 0
        });
        
    });

    document.getElementById("contact-button-link").addEventListener("click", () => {
        showContentById("contact");
        window.scrollTo({
            top: 0
        });
        
    });


    


});
