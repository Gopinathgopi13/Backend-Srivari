import { Router } from "express";
import * as manageProductController from "../../controllers/admin/manageProductController.js";
import { checkAdminRole } from "../../middlewares/checkAdminRole.js";

const manageProductRouter = Router();

manageProductRouter.post(
  "/products",
  checkAdminRole,
  manageProductController.createProduct
);

manageProductRouter.delete(
  "/products/:id",
  checkAdminRole,
  manageProductController.removeProduct
);

manageProductRouter.put(
  "/products/:id",
  checkAdminRole,
  manageProductController.modifyProduct
);

export default manageProductRouter;
