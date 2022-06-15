const router = require("express").Router();
const {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");


const firebase = require("../config/db");
const firestore = firebase.firestore();

router.post("/", async function(req,res){
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
          doc.data().longdescription,
          doc.data().images,
          doc.data().tags
        );
        productsArray.push(product);
      });
      console.log(productsArray);

      res.render("./", { products: productsArray });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.get("/shop", getAllProducts);
// router.get("/test", (req, res) => {
//   console.log("test route");
//   res.send("test route");
// });

router.get("/product/:id", getProduct);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

router.get("/", (req, res) => {
  res.render("home.html");
});

router.get("/home", (req, res) => {
  res.render("home.html");
});

router.get("/shop/:id", getProduct );

router.get("/contact-01", (req, res) => {
  return res.render("contact-01.html");
});

module.exports = router;
