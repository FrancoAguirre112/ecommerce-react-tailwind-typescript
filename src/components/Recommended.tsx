import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";
import { ProductType } from "../types";
import Product from "./Product";

interface RecommendedProps {
  product: ProductType;
}

const Recommended = ({ product }: RecommendedProps) => {
  const { products, getProducts } = useProducts();

  const shortproduct = products
    .filter((p) => {
      return p.id !== Number(product?.id);
    })
    .slice(0, 4);

  useEffect(() => {
    getProducts(1, "", product?.category);
  }, [product]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {shortproduct.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </div>
  );
};

export default Recommended;
