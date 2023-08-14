import { useProducts } from "../hooks/useProducts";
import { useEffect } from 'react';
import Product from "./Product";
import Spinner from "./Spinner";
import { ProductType } from "../types";

interface ProductListProps {
  search?: string;
  category?: string;
}

const ProductList: React.FC<ProductListProps> = ({search = "", category=""}) => {
  const { products, loading, error, getProducts} = useProducts();

  useEffect(() => {
    getProducts(4, search, category)
  }, [search, category])

  if (loading) { return <Spinner />}
  if (error) { return <div>{error}</div>}
 

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {products?.map((product: ProductType) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
