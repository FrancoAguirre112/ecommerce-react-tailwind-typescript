import { ProductType } from "../types";
import { useCartContext } from "../context/cartContext";
import { useEffect, useState } from "react";

function AddToCartBtn({
  minimized = false,
  product,
}: {
  minimized?: boolean;
  product: ProductType;
}) {
  const [isInCart, setIsInCart] = useState(false);

  const { addToCart, removeFromCart, cartItems } = useCartContext();

  const handleClick = () => {
    if (!isInCart) {
      addToCart(product);
    } else {
      removeFromCart(product.id);
    }
  };

  useEffect(() => {
    const itemInCart = cartItems.some((item) => item.id === product.id);
    setIsInCart(itemInCart);
  },[cartItems])

  return (
    <button
      className={`flex items-center justify-center text-lg text-white px-10 py-3 gap-3 font-semibold ${
        isInCart ? "bg-red-900" : "bg-main"
      } rounded-lg transition-all w-full`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-shopping-cart"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
        <path d="M17 17h-11v-14h-2"></path>
        <path d="M6 5l14 1l-1 7h-13"></path>
      </svg>
      {minimized == false &&
        (isInCart ? (
          <h1>Remove</h1>
        ) : (
          <h1 className="line-clamp-1">Add to Cart</h1>
        ))}
    </button>
  );
}

export default AddToCartBtn;
