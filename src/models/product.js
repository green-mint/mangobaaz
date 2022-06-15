class Product {
    constructor(id, name, category, price, description,longdescription, images, tags) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
        this.longdescription = longdescription;
        this.images = images;
        this.tags = tags;
    }
}

module.exports = Product;