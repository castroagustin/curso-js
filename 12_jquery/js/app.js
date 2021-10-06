const products = [];
const cart = JSON.parse(localStorage.getItem('cart')) || [];

const productsContainer = $('.sectionSales__container');
const message = $('.message')[0];

class Producto {
    constructor(name, price, image, stock, id) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.stock = stock;
        this.id = id;
    }
}

products.push(new Producto('Zapatillas Adidas X', 12000, './assets/prods/zap1.jpg', 12, 1));
products.push(new Producto('Zapatillas Adidas Y', 14000, './assets/prods/zap2.jpg', 9, 2));
products.push(new Producto('Zapatillas Adidas Z', 15000, './assets/prods/zap3.jpg', 16, 3));
products.push(new Producto('Zapatillas Adidas A', 13000, './assets/prods/zap4.jpg', 4, 4));

products.forEach(prod => {
    productsContainer.append(`
    <div class="sectionSales__sale" id="${prod.id}">
        <div class="sale__imgContainer">
            <img src="${prod.image}" class="sale__img">
        </div>
        <div class="sale__text">
            <p class="sale__title">${prod.name}</p>
            <div class="sale__price"><span>$16000</span> $${prod.price}</div>
            <div class="sale__addCart">Agregar al carrito</div>
        </div>
    </div>
    `)
})

const addCart = $('.sale__addCart');
const addCartArr = [...addCart];

addCartArr.forEach(btn => {
    btn.addEventListener('click', () => {
        message.classList.remove('hidden');
        setTimeout(() => {
            message.classList.add('hidden')
        }, 1500);

        const prodId = btn.parentNode.parentNode.id;
        addToCart(prodId);
    })
})

const addToCart = (prodId) => {
    cart.push(products.find(e => e.id == prodId));
    console.log(cart);
}