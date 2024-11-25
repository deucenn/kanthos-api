import { Router, Request, Response } from "express";
import printifyService from "../services/printifyService";
import { SHOP_ID } from "../config/dotenvConfig";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    if (!SHOP_ID) {
      throw new Error("SHOP_ID is not defined");
    }
    const products = await printifyService.getProducts(SHOP_ID);
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", (error as Error).message);
    res.status(500).json({ message: "Error fetching products" });
  }
});

export default router;

