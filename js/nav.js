const button = document.querySelector(".menu-btn");

const dropdown = document.querySelector(".dropdown-menu");

dropdown.style.display = "none"

button.addEventListener("click", () => {
    if (dropdown.style.display == "none") {
        dropdown.style.display = "block";
        button.style.transform = "rotate(90deg)";
        button.style.transition = "all ease 0.5s";
        button.style.borderBottom = "5px solid #483420";
        button.style.borderRight = "5px solid #483420";
    }
    else if (dropdown.style.display == "block") {
        dropdown.style.display = "none";
        button.style.transform = "rotate(0deg)";
        button.style.transition = "all ease 0.5s";
        button.style.borderBottom = "none";
        button.style.borderRight = "none";
    }
});