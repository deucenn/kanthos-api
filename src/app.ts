import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors"; 
import shopsRouter from "./routes/shops"; 
import productsRouter from "./routes/products"; 

const app: Application = express();

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

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "An unexpected error occurred" });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running!");
});

export default app;

