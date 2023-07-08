import { ProductType } from "../types";
//TODO: Change inline api url for .env
export const productsFetch = async (page: number, category: string) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products${category && category !== "all" ? `/category/${category}` : ""}?limit=${6*page}`);
    const json = await response.json();

    const products = json;

    return products?.map((product: ProductType) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price.toFixed(2),
      category: product.category,
      image: ["https://i.imgur.com/iePzniM.png", "https://i.imgur.com/xH3dQso.png", "https://i.imgur.com/YCg9tL6.png"],
    }));
  } catch (error) {
    throw new Error("Error fetching products");
  }
};
