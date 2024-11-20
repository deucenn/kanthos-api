const express = require("express");
const shopsRouter = require("./routes/shops");
const productsRouter = require("./routes/products");

const app = express();

app.use(express.json());

app.use("/api/shops", shopsRouter);
app.use("/api/products", productsRouter);

module.exports = app;
