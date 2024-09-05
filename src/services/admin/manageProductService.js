import { prisma } from "../../utils/prisma.js";

export const addProduct = async (productData) => {
  return await prisma.product.create({
    data: productData,
  });
};

export const deleteProduct = async (productId) => {
  return await prisma.product.delete({
    where: { product_id: productId },
  });
};

export const updateProduct = async (productId, productData) => {
  return await prisma.product.update({
    where: { product_id: productId },
    data: productData,
  });
};
