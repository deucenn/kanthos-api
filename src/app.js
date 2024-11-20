const express = require("express");
const cors = require("cors"); 
const shopsRouter = require("./routes/shops");
const productsRouter = require("./routes/products");

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:3000",
        "https://kanthos.netlify.app",
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); 
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
  })
);

app.use("/api/shops", shopsRouter);
app.use("/api/products", productsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An unexpected error occurred" });
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

module.exports = app;

