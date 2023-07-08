import { Link } from "react-router-dom";
import { ProductType } from "../types";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <Link className="" to={`/product/${product.id}`}>
      <li
        key={product.id}
        className="mx-auto max-w-md min-w-full flex mb-10  flex-col gap-4 h-[16rem] lg:h-[23rem] "
      >
        <img
          className="h-full w-full object-cover object-center border-[1px] rounded-md"
          src={product.image[0]}
          alt={`product image of ${product.title}`}
        />

        <div className="flex justify-between gap-1">
          <div className="flex flex-col overflow-hidden">
            <h2 className="font-semibold  text-gray-900 line-clamp-1 text-sm lg:text-base">
              {product.title}
            </h2>
            <p className="text-gray-600 font-semibold line-clamp-1 text-xs lg:text-sm">
              {product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
            </p>
          </div>

          <div className="flex items-center min-w-[5.41rem] justify-center px-4 font-semibold bg-gray-200 rounded-lg text-xs lg:text-sm">
            <p className="text-gray-900">${product.price}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Product;
