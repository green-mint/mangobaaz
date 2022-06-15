const router = require("express").Router();
const {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/", addProduct);
router.get("/test", getAllProducts);
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

router.get("/shop", (req, res) => {
  res.render("shop.html");
});

router.get("/shop/:id", (req, res) => {
  // get the id from the url
  const id = req.params.id;
  console.log(id);
  res.render("product.html");
});

router.get("/contact-01", (req, res) => {
  return res.render("contact-01.html");
});

module.exports = router;
