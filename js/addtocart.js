const product = [
    {
        id: 0,
        image: 'images/souvenirs/s1.jpg',
        title: 'Bat Trang Porcelain',
        description: "Bat Trang porcelain and pottery is a type of ceramic made in the village of Bat Trang, on the outskirts of Hanoi, Vietnam. The village is located in an area rich in clay suitable for making ceramic. Bát Tràng ceramics are considered some of the best known porcelain products in Vietnam besides those of Chu Đậu, Biên Hòa, Phù Lãng, Hương Canh, Lái Thiêu and Bầu Trúc. The history of ceramic making in this village can be traced back as far as the 14th century AD during the Ly-Tran dynasty period.",
        price: 120,
    },
    {
        id: 1,
        image: 'images/souvenirs/s2.jpg',
        title: 'Tribal Textiles',
        description: "Tribal textiles are prized possessions for tourists in Vietnam as the opportunity to see and buy such uniquely exquisite, hand-stitched craftsmanship is a rare luxury to those visiting from the West.",
        price: 120,
    },
    {
        id: 2,
        image: 'images/souvenirs/s3.jpg',
        title: 'Paper Lanterns',
        description: "Paper lanterns are never ever a bad idea. Flat, packable and ready-to-go, these traditional lanterns will add a touch of sensual Vietnamese style to any garden or bedroom and are available in a spectrum of spectacular colours and materials from 4 USD. Go for the silk variety if you’re feeling indulgent.",
        price: 120,
    },
    {
        id: 3,
        image: 'images/souvenirs/s4.jpg',
        title: 'Puppets & Masks',
        description: "Puppets and masks are used in traditional Vietnamese theatre productions and festivals throughout the year. Made from bamboo, palm leaves and lacquer, the masks are a popular sight in the north.",
        price: 120,
    },
]

const categories = [...new Set(product.map((item) => 
    {return item}))]
    let i = 0;
document.getElementById('cart-root').innerHTML = categories.map((item) => 
{
    var {image, title, description, price} = item;
    return (
        ``
    )
})