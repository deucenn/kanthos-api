const express = require("express");
const router = express.Router();
const printifyService = require("../services/printifyService");

router.get("/", async (req, res) => {
  try {
    const shops = await printifyService.getShops();
    res.json(shops);
  } catch (error) {
    console.error("Error fetching shops:", error.message);
    res.status(500).json({ message: "Error fetching shops" });
  }
});

module.exports = router;
