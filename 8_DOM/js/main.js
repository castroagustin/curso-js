const productsContainer = document.getElementById('productsContainer');

const productos = JSON.parse(localStorage.getItem('products')) || [];

// Constructor de productos
class Producto {
    constructor(nombre, categoria, precio, stock, id){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
        this.ventas = 0;
    }
    hayStock = (cant) => this.stock >= cant;
    restarStock = (cant) => this.stock -= cant;
    sumarStock = (cant) => this.stock += cant;
    sumarVentas = (cant) => this.ventas += cant;
}

const agregarProductos = () => {
    let pregunta = prompt('Desea ingresar un producto? SI / NO');
    while(pregunta.toUpperCase() == 'SI'){
        const nombreProd = prompt('Nombre del producto:');
        const categProd = prompt('Categoria:');
        const precioProd = Number(prompt('Precio:'));
        const stockProd = Number(prompt('Stock:'));
        const idProd = productos.length + 1;
        const objProd = new Producto(nombreProd, categProd, precioProd, stockProd, idProd);
        productos.push(objProd);
        localStorage.setItem('products', JSON.stringify(productos))
        pregunta = prompt('Desea ingresar un producto? SI / NO');
    }
}


const mostrarProductos = () => {
    productos.forEach((prod) => {
        productsContainer.innerHTML += `
        <div class="list__row">
            <span class="row__text row__text--left">${prod.nombre}</span>
            <span class="row__text row__text--center">$${prod.precio}</span>
            <span class="row__text row__text--right">${prod.stock}</span>
        </div>`
    })
}

agregarProductos();
mostrarProductos();