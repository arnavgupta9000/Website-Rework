document.addEventListener("DOMContentLoaded", () =>  {
    
    let hamburgerMenu = document.getElementById("hamburger-menu");
    let navLinks = document.querySelector("#main-nav ul");
    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("show");  
    });

    function clear(id) {
        document.querySelectorAll("#main > div").forEach(div => { // only select direct div children of main
            div.style.display = "none";
            
        });
        let selectedDiv = document.getElementById(id);

        if (selectedDiv) { // if it exists
            selectedDiv.style.display = "block";
        }

        
    }

    // document.getElementById("about-link").addEventListener("click", () => {
    //     clear("about");
    // });

    let toggleLink = document.getElementById("toggle-more");
    let moreContent = document.getElementById("more-about");

    toggleLink.addEventListener("click", function () {
    let isHidden = moreContent.style.display === "none" || moreContent.style.display === "";

    if (isHidden) {
      moreContent.style.display = "block";
      moreContent.classList.add("hidden-text"); // trigger animation
      toggleLink.textContent = "Show Less";
    } else {
      moreContent.style.display = "none";
      toggleLink.textContent = "Show More";
    }
    });

    


});
