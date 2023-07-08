import { useProducts } from "../hooks/useProducts";
import { useRef, useEffect } from 'react';
import Product from "./Product";
import Spinner from "./Spinner";
import { ProductType } from "../types";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

interface ProductListProps {
  search?: string;
  category?: string;
}

const ProductList: React.FC<ProductListProps> = ({search = "", category=""}) => {
  const { products, loading, error, getProducts, hasMore } = useProducts();
  const observerRef = useRef<HTMLDivElement>(null);

  // useInfiniteScroll(getProducts, "Men", observerRef, 0);

  useEffect(() => {
    getProducts(4, search, category)
  }, [search, category])

 

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {products?.map((product: ProductType) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
      <div ref={observerRef}></div>
      {loading && <Spinner />}
      {error && <div>{error}</div>}
    </>
  );
};

export default ProductList;
