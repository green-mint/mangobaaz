const firebase = require("../config/db");
const Product = require("../models/product");
const firestore = firebase.firestore();

const addProduct = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("products").doc().set(data);
    res.send("Product added successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await firestore.collection("products");
    const data = await products.get();

    const productsArray = [];
    if (data.empty) {
      res.send("No products found");
      console.log("object is empty");
    } else {
      data.forEach(doc => {
        const product = new Product(
          doc.id,
          doc.data().name,
          doc.data().category,
          doc.data().price,
          doc.data().description,
          doc.data().image
        );
        productsArray.push(product);
      });
      console.log("object is not empty");
      res.send(productsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await firestore.collection("products").doc(id);
    const data = await product.get();
    if (!data.exists) {
      res.status(404).send("Product not found");
    } else res.send(data.data());
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const product = await firestore.collection("products").doc(id);
    await product.update(data);
    res.send("Product updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await firestore.collection("products").doc(id);
    await product.delete();
    res.send("Product deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
