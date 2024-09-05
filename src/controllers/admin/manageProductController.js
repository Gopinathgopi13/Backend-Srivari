import * as manageProductService from "../../services/admin/manageProductService.js";

export const createProduct = async (req, res) => {
  try {
    const product = await manageProductService.addProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const removeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await manageProductService.deleteProduct(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};

export const modifyProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await manageProductService.updateProduct(id, req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};
