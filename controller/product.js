const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;

// create new product
exports.createProduct = (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
};

// get all the products
exports.getProducts = (req, res) => {
  res.json(products);
};

// get specific product using ID
exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((product) => product.id === id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "product not found" });
  }
};

// replace product using PUT method
exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex == -1) {
    res.status(404).json({ error: "This product is not found on the server" });
  } else {
    products.splice(productIndex, 1, { ...req.body, id: id });
    res.status(201).json({ message: "Product Updated" });
  }
};

// update product using PATCH method
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id === id);
  const product = products[productIndex];

  if (productIndex == -1) {
    res.status(404).json({ error: "This product is not found on the server" });
  } else {
    products.splice(productIndex, 1, { ...product, ...req.body });
    res.status(201).json({ message: "Product Updated" });
  }
};

// delete the product
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex == -1) {
    res.status(404).json({ error: "This product is not found on the server" });
  } else {
    products.splice(productIndex, 1);
    res.status(202).json({ message: "Product Deleted" });
  }
};
