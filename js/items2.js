const productsList = document.body.querySelector('.products');
//TO-DO: implment addProduct function
const addProduct = (params) => {
    const product = document.createElement('div');
    product.classList.add('product');

    const img = document.createElement('img');
    img.classList.add('product-img');
    img.src = params.img;
    const titleText = document.createElement('h3');
    titleText.textContent = params.title;
    const title = document.createElement('div');
    title.appendChild(titleText);
    title.classList.add('product-name');
    
    const description = document.createElement('div');
    const descriptionText = document.createElement('p');
    descriptionText.textContent = params.description;
    description.appendChild(descriptionText);
    description.classList.add('description');

    const button = document.createElement('button');
    button.classList.add('buy');
    button.innerHTML = 'Buy now';

    product.appendChild(img);
    product.appendChild(title);
    product.appendChild(description);
    product.appendChild(button)

    productsList.appendChild(product);
    return product;
};

const hotProducts = [];
hotProducts.push(
    addProduct({
        img: "images/souvenirs/s9.jpg",
        title: "Coffee Beans",
        description: "Purchase one of the best-known culinary products of Vietnam. The country is the second biggest coffee producer in the world, and the legacy of the French rule in the late 19th century is superb coffee shops and patisseries all over the country."
    })
);

addProduct({
    img: "images/souvenirs/s10.webp",
    title: "Silk",
    description: "Luxurious silk is one of the most popular items to buy in Vietnam. An important commodity throughout history, silk is produced here and woven into clothing, scarves, paintings, interior furnishings, tablecloths, and much more. Two of the best-known silk-weaving villages are Nha Xa, near Hanoi, and Ma Chau in the Quang Nam province."
});

addProduct({
    img: "images/souvenirs/s11.webp",
    title: "Ceramics & Pottery",
    description: "Traditional pottery is one of the best things to buy in Vietnam. The country’s ties to ceramics date right back to the Bronze Age. More recently, ceramic making has been influenced by Chinese and French styles."
});

hotProducts.push(
addProduct({
    img: "images/souvenirs/s12.jpg",
    title: "Jewelry",
    description: "Jewelry is always an evocative memory of distant travels. Discover earrings, necklaces, bracelets, and rings at local markets and streetside souvenir stalls. Woven bracelets are one of the more popular jewelry items to take home."
})
);

addProduct({
    img: "images/souvenirs/s13.webp",
    title: "Lacquerware",
    description: "For Vietnam souvenirs with a distinctive look, consider purchasing a lacquerware item. These gorgeous pieces of art range from bowls to vases, jewelry boxes, and paintings.",
});

hotProducts.push(
addProduct({
    img: "images/souvenirs/s15.webp",
    title: "Musical Instruments",
    description: "Music is a key feature of Vietnamese culture, and popular instruments like flutes, xylophones, and violins can make a great gift or souvenir. You don’t have to be a virtuoso to appreciate the cultural significance of these items, although the type of instrument you choose may depend on the available space in your carry-on."
})
);

addProduct({
    img: "images/souvenirs/s14.webp",
    title: "Chopsticks",
    description: "Whether you’ve mastered the art of eating with chopsticks during your time in Vietnam or still need a bit of practice, these eating utensils are a popular souvenir to bring home."
});

addProduct({
    img: "images/souvenirs/s16.jpg",
    title: "Alluvia Chocolate",
    description: "No other sentiments can compare to sentiment as receiving a box of chocolate. The box contains not only chocolate, also excitement, joy and grace. Hence remember to buy a box of chocolate for your friends, family, your special ones from time to time. Bring on the chocolate and let the happiness reign."
});