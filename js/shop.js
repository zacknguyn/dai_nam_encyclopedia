//Pre-requiste: nav.js and items.js
const main = document.querySelector("main");
const footer = document.querySelector("footer");

main.style.setProperty("--nav-height", getNavHeight() + "px");
const carousel = document.querySelector(".carousel");
console.log(carousel);
carousel.style.height = "calc(100vh - " + getNavHeight() + ")";

const productsElement = document.getElementById("products-list");
console.log(productsList);
// Implement fancy navigation between carousel and products
let currentSection = "carousel";
let oldYOffset = window.pageYOffset;
productsElement.style.setProperty("display", "none");

let sumYWheel = 0;
const threshold = 100;
const fadeArrow = document.querySelector(".fade-arrow");
const hideArrow = () => {
    fadeArrow.style.opacity = "0";
    fadeArrow.style.zIndex = "-1";
};
const skipToProducts = () => {
    sumYWheel = 0;
    fadeArrow.style.opacity = "0";
    carousel.style.setProperty("display", "none");
    currentSection = "products";
    productsElement.style.setProperty("display", "block");
};
const skipToCarousel = () => {
    sumYWheel = 0;
    fadeArrow.style.opacity = "0";
    productsElement.style.setProperty("display", "none");
    currentSection = "carousel";
    carousel.style.setProperty("display", "block");
}

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    console.log(scrollY + " vs. " + main.scrollHeight + " at " + currentSection);
    if (scrollY >= main.scrollHeight) {
        alert("Please swipe or roll the mouse wheel to proceed");
    }
});

window.addEventListener("wheel", (event) => {
    if (nav.dataset.active == "true") return;
    let scrollX = window.scrollX;
    let scrollY = window.scrollY;
    // if (isScrollingDown) return;
    if ((currentSection == "carousel" && event.deltaY >= 0) 
    || (currentSection == "products" && scrollY <= 0 && event.deltaY <= 0))
        sumYWheel += event.deltaY;
    if (currentSection == "carousel" && sumYWheel < 0) sumYWheel = 0;
    if (currentSection == "products" && scrollY > 0 && event.deltaY > 0) {
        sumYWheel = 0;
        fadeArrow.style.opacity = "0";
        // hideArrow();
    }
    // if (currentSection == "products" && sumYWheel > 
    console.log("Moved " + event.deltaY + " at " + currentSection + ", page = " + scrollY + " total = " + sumYWheel);
    
    if ((currentSection == "carousel" && sumYWheel >= 0) ||
    (currentSection == "products" && sumYWheel <= 0 && scrollY <= 0)) {
        fadeArrow.style.opacity = "1";
        let icon = fadeArrow.querySelector("i");
        let rate = 1 + 10 * Math.abs(sumYWheel / threshold);
        icon.style.width = icon.style.height = rate * 50 + "px";
        icon.style.fontSize = rate + "rem";
        icon.style.transform = "scale(" + (sumYWheel > 0 ? +1 : -1) + ")";
    }
    if (currentSection == "carousel" && event.deltaY <= 0) 
        fadeArrow.style.opacity = "0";

    if (currentSection == "carousel") {
        if (sumYWheel < threshold) {
            window.scroll(scrollX, scrollY);
            return;
        }
        console.log("Scrolling down");
        skipToProducts();
        window.scroll(0,0);
        return ;
    } 
    if (sumYWheel <= -threshold) {
        console.log("Scrolling down");
        skipToCarousel();
        window.scroll(0,0);
        return;
    }

});

window.setInterval(() => {
    fadeArrow.style.zIndex = "-2";
    if (!fadeArrow.style.opacity) {
        fadeArrow.style.opacity = "0";
    } else
    if (fadeArrow.style.opacity > 0)
        fadeArrow.style.opacity -= 0.05;
    if (fadeArrow.style.opacity > 0)
        fadeArrow.style.zIndex = "3";
}, 100);

// Implement carousel
const carouselItems = document.querySelectorAll(".hot-product");
let curIndex = 0;

const moveLeft = () => {
    carouselItems[curIndex].dataset.active = "false";
    curIndex = (curIndex == 0) ? carouselItems.length-1 : curIndex-1;
    carouselItems[curIndex].dataset.active = "true";
};

const moveRight = () => {
    carouselItems[curIndex].dataset.active = "false";
    curIndex = (curIndex >= carouselItems.length-1) ? 0 : curIndex+1;
    carouselItems[curIndex].dataset.active = "true";
}

const addCarouselItem = (item, index) => {
    carouselItems[index].classList.add("product");
    let temp = item.cloneNode(true);
    temp.removeChild(temp.querySelector("button"));
    carouselItems[index].innerHTML = temp.innerHTML;
}

for (let i = 0; i < hotProducts.length; i++) {
    addCarouselItem(hotProducts[i], i);
}