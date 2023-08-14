import { useCartContext } from "../context/cartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalPrice, removeFromCart } = useCartContext();

  const uniqueItemsIds = new Set();

  if (cartItems.length === 0) {return (<div className=" flex flex-col items-center justify-center text-center w-auto">
    <h1 className="text-3xl font-semibold">It seems like your cart it's empty, let's change that!</h1>
    <Link
          to="/store"
          className="w-[50%]  mt-6 bg-main flex items-center justify-center text-lg text-white px-10 py-3 gap-3 font-semibold rounded-lg hover:scale-105 transition-transform"
        >
          Shop
        </Link>
  </div>)}

  return (
    <div className="flex flex-col gap-6 mt-10 min-h-screen">
      {cartItems.map((item) => {
        if (!uniqueItemsIds.has(item.id)) {
          uniqueItemsIds.add(item.id);
          return (
            <ul key={item.id} className="flex flex-col gap-6 px-4 lg:px-24">
              <CartItem item={item} />
              <hr className="h-2" />
            </ul>
          );
        }
        return null;
      })}
      <div className="bg-secondary px-4 lg:px-24 mt-auto">
        <div className="my-6 mx-4 lg:mx-24 font-semibold">
          <div className="flex gap-4 justify-between">
            <h1>Subtotal</h1>
            <h1>${totalPrice.toFixed(2)}</h1>
          </div>
          <div className="flex gap-4 justify-between">
            <h1>Shipping</h1>
            <h1>FREE</h1>
          </div>
        </div>

        <div className="flex gap-4 justify-between mx-4 lg:mx-24 mb-6 font-bold">
          <h1>Grand Total</h1>
          <h1>${totalPrice.toFixed(2)}</h1>
        </div>
        <hr className="h-2" />
        <Link
          onClick={() => {
            uniqueItemsIds.forEach((id) => {
              removeFromCart(Number(id));
            });
          }}
          to="/success"
          className="w-full  mt-6 bg-main flex items-center justify-center text-lg text-white px-10 py-3 gap-3 font-semibold rounded-lg hover:scale-105 transition-transform"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
