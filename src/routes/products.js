const express = require("express");
const router = express.Router();
const printifyService = require("../services/printifyService");
const { SHOP_ID } = require("../config/dotenvConfig");

router.get("/", async (req, res) => {
  try {
    const products = await printifyService.getProducts(SHOP_ID);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

module.exports = router;