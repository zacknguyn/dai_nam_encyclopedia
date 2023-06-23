const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase()
    const storeitems = document.getElementById("blog-container")
    const item = document.querySelectorAll(".blog-box")
    const blogname = storeitems.getElementsByTagName("h3")

    for(var i = 0; i < blogname.length; i++) {
        let match = item[i].getElementsByTagName('h3')[0];

        if(match) {
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchbox) > -1) {
                item[i].style.display = "";
            } else {
                item[i].style.display = "none";
            }
        }
    }
}

const search_shop = () => {
    const searchbox = document.getElementById("search-item-shop").value.toUpperCase()
    const storeitems = document.getElementById("products-container")
    const item = document.querySelectorAll(".product")
    const productname = storeitems.getElementsByTagName("h3")

    for(var i = 0; i < productname.length; i++) {
        let match = item[i].getElementsByTagName('h3')[0];

        if(match) {
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchbox) > -1) {
                item[i].style.display = "";
            } else {
                item[i].style.display = "none";
            }
        }
    }
}