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
        img: "images/souvenirs/s1.jpg",
        title: "Bat Trang Porcelain",
        description: "Bát Tràng porcelain and pottery is a type of ceramic made in the village of Bát Tràng, on the outskirts of Hanoi, Vietnam."
    })
);

addProduct({
    img: "images/souvenirs/s2.jpg",
    title: "Tribal Textiles",
    description: "Tribal textiles are prized possessions for tourists in Vietnam as the opportunity to see and buy such uniquely exquisite, hand-stitched craftsmanship is a rare luxury to those visiting from the West."
});

addProduct({
    img: "images/souvenirs/s3.jpg",
    title: "Paper Lanterns",
    description: "Paper lanterns are never ever a bad idea. Flat, packable and ready-to-go, these traditional lanterns will add a touch of sensual Vietnamese style to any garden or bedroom and are available in a spectrum of spectacular colours and materials from 4 USD. Go for the silk variety if you’re feeling indulgent."
});

hotProducts.push(
addProduct({
    img: "images/souvenirs/s4.jpg",
    title: "Puppets & Masks",
    description: "Puppets and masks are used in traditional Vietnamese theatre productions and festivals throughout the year. Made from bamboo, palm leaves and lacquer, the masks are a popular sight in the north."
})
);

addProduct({
    img: "images/souvenirs/s5.webp",
    title: "Conical Hats",
    description: "Conical hats are the most recognisable and classic symbol of the Vietnamese silhouette. The handwoven, palm leaf hat is rich with history, cultural sentiment and designed to protect people from the rain and sun.",
});

hotProducts.push(
addProduct({
    img: "images/souvenirs/s6.jpg",
    title: "Ao Dai",
    description: "The national garment of this SE Asian country, Áo Dài are wonderful Vietnam souvenirs. This traditional, tight fitting long dress, used by both men and women especially on special occasions, can be found all over Vietnam."
})
);

addProduct({
    img: "images/souvenirs/s7.jpg",
    title: "Hand Fans",
    description: "Hand fans are made of sturdy bamboo and paper or silk. They can be used for cooling or decoratively in the home."
});

addProduct({
    img: "images/souvenirs/s8.jpg",
    title: "Hand Embroidered Stuff",
    description: "The art of hand-embroidered garments and items is an old handicraft tradition in Vietnam. You will especially encounter scenic nature scenes, such as flowers, trees, animals and birds."
});