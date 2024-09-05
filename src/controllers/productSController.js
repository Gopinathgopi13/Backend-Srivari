import {
  getAllProducts,
  getSingleProduct,
} from "../services/productService.js";


export const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const getSingleProductController = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getSingleProduct(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};
