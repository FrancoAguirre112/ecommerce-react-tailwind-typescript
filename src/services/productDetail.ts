export const productDetailFetch = async (id: number) => {
  try {
    const response = await fetch(import.meta.env.VITE_PRODUCT_LIST_API + id);
    const json = await response.json();

    const product = json;
    product.image = ["https://i.imgur.com/iePzniM.png", "https://i.imgur.com/xH3dQso.png", "https://i.imgur.com/YCg9tL6.png"];
    return product;
  } catch (error) {
    throw new Error("Error fetching product");
  }
};
