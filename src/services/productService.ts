import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  const products = [
    {
      title: "Dell Laptop",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpHjwOIdy9FOrzZXG7HsFxm7X37yGvqcTpQ&s",
      price: 1500,
      stock: 10,
    },
  ];

  const existingProducts = await getAllProducts();
  if (existingProducts.length === 0) {
    await productModel.insertMany(products);
  }
};
