const router = require("express").Router();

router.get("/", (req, res) => {
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
