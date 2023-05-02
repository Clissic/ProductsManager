const fs = require("fs");

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
        const productsString = fs.readFileSync("products.json", "utf-8");
        const products = JSON.parse(productsString);
        this.products = products;
    }

    getAllProducts() {
        return this.products;
    }

    createProduct(product) {
        this.products.push(product);
        const productsString = JSON.stringify(this.products);
        fs.writeFileSync("products.json", productsString)
    }
}

const productManager = new ProductManager("products.json");
productManager.createProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock:25
    })

console.log(productManager.getAllProducts())