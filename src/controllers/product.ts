import Product from "../models/product";
import { Request, Response } from "express";

export async function addProduct(req: Request, res: Response) {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(400).json({ message: "Fill all necessary details" });
  }
  try {
    const product = new Product({
      name,
      price,
      category,
    });
    await product.save();
    return res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ error: "productID is missing" });
  }
  try {
    const product = await Product.findByIdAndDelete(id);
    return res.status(201).json({ message: "Product deleted", product });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function updateProduct(req: Request, res: Response) {
  const id = req.params.id;
  const updates = req.body;
  if (!id) {
    return res.status(400).json({ error: "productID is missing" });
  }
  try {
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    return res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
}
