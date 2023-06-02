const menuBtn = document.querySelector(".menu-btn");
const nav = document.body.querySelector("nav");
const dropdown = document.querySelector(".dropdown-menu");
// const main = document.querySelector("main");
const topButton = document.querySelector("#go-top-btn");

const getNavHeight = () => {
    return document.defaultView.getComputedStyle(nav).getPropertyValue("height");
};

window.addEventListener("scroll", () => {
    // Enable "Go to top" button when scrolling down
    // Disable menu button also
    let navHeight = parseInt(getNavHeight());
    if (nav.dataset.active == "false") 
        menuBtn.disabled = (window.pageYOffset > navHeight) ? true : false;
    if (window.pageYOffset > navHeight)
        topButton.style.display = "block";
    else
        topButton.style.display = "none";
});

const dropdownHeight = 
    parseInt(document.defaultView.getComputedStyle(dropdown).getPropertyValue("height"));
document.body.style.setProperty("--dropdown-height", dropdownHeight + "px");

menuBtn.addEventListener("click", () => {
    dropdown.style.top = getNavHeight();
    if (nav.dataset.active == "false") {
        window.scrollTo(0,0);
        nav.dataset.active = "true";

        menuBtn.style.transform = "rotate(90deg)";
        menuBtn.style.borderBottom = "5px solid #483420";
        menuBtn.style.borderRight = "5px solid #483420";
    }
    else {
        nav.dataset.active = "false";
        dropdown.style.zIndex = "-1";
        
        menuBtn.style.transform = "rotate(0deg)";
        menuBtn.style.borderBottom = "none";
        menuBtn.style.borderRight = "none";
    }
});

dropdown.addEventListener("transitionend", () => {
    if (nav.dataset.active == "true") 
        dropdown.style.zIndex = "0";
});