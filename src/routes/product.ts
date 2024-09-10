import { Router } from "express";
import {
  addProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} from "../controllers/product";

const router = Router();

router.post("/add-product", addProduct);
router.get("/", getAllProducts);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

export default router;
