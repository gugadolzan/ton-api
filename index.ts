import express, { Request, Response } from "express";

import { IProduct } from "./types";

const app = express();

const PORT = 3000;

app.get("/", (_req: Request, res: Response) => {
  const products = require("./data/ton-products.json");
  res.status(200).json(products);
});

app.get("/:id", (req: Request, res: Response) => {
  const products: IProduct[] = require("./data/ton-products.json");
  const product: IProduct | undefined = products.find(
    (p: IProduct) => p.id === req.params.id
  );

  if (!product) return res.status(404).json({ message: "Product not found" });

  res.status(200).json(product);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
