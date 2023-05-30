const button = document.querySelector(".menu-btn");
const nav = document.body.querySelector("nav");
const dropdown = document.querySelector(".dropdown-menu");
const main = document.querySelector("main");

button.addEventListener("click", () => {
    dropdown.style.top = document.defaultView.getComputedStyle(nav).getPropertyValue("height");
    let offsetBottom = 
        parseInt(document.defaultView.getComputedStyle(dropdown).getPropertyValue("height"));
    // console.log("Hasla vista baby, " + dropdown.style.top + "px and " + offsetBottom + "px");
    if (nav.dataset.active == "false") {
        nav.dataset.active = "true";
        main.style.transform = "translateY(" + offsetBottom + "px)";
        // dropdown.style.display = "block";
        button.style.transform = "rotate(90deg)";
        button.style.borderBottom = "5px solid #483420";
        button.style.borderRight = "5px solid #483420";
    }
    else {
        nav.dataset.active = "false";
        main.style.transform = "translateY(0px)";
        // dropdown.style.display = "none";
        button.style.transform = "rotate(0deg)";
        button.style.borderBottom = "none";
        button.style.borderRight = "none";
    }
});