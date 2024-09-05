import { Router } from "express";
import * as productController from "../controllers/productSController.js";
const productRouter = Router();

productRouter.get("/products", productController.getAllProductsController);
productRouter.get("/product/:id", productController.getSingleProductController);
// productRouter.get("/product/", productController.getSingleProductController);

export default productRouter;
