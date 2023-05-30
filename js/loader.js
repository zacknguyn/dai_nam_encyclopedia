

window.addEventListener("load", () => {
    const loader = document.querySelector(".code-loader");

    
    loader.classList.add("code-loader-hidden");
    
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("code-loader");
    })
})