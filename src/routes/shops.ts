import express, { Router, Request, Response } from "express";

import printifyService from "../services/printifyService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const shops = await printifyService.getShops();
    res.json(shops);
  } catch (error) {
    console.error("Error fetching shops:", (error as Error).message);
    res.status(500).json({ message: "Error fetching shops" });
  }
});

export default router;
