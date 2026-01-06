import { useSelector , useDispatch} from "react-redux";
import Nav from "./components/Nav";
import { increment, decrement , removeItemFromCart} from "../redux/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  console.log(items);
const ttl = Math.round(items.reduce((sum, item) => sum + (item.price * item.quantity), 0));

  const notify = () => toast("Congratulations..! Your order is placed, Thank you");
  



  return (
    <>
      <Nav />

      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
            {items.length === 0 && (
              <p className="items-center"> Your cart is empty</p>
            )}
            {/* Cart Item */}
            {items.map((i) => (
              <div className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row gap-4">
                <img
                  src={i.image}
                  alt="product"
                  className="w-full sm:w-32 h-32 object-contain rounded-lg bg-gray-100"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg text-gray-800">
                    {i.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{i.category}</p>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <button className="px-3 py-1 border rounded-md" onClick={()=>dispatch(decrement(i.id))}>−</button>
                      <span className="font-medium">{i.quantity}</span>
                      <button className="px-3 py-1 border rounded-md" onClick={()=>dispatch(increment(i.id))}>+</button>
                    </div>

                    {/* Price */}
                    <p className="font-semibold text-indigo-600">
                      {i.price * i.quantity }
                    </p>
                  </div>
                </div>

                {/* Remove */}
                <button className="text-red-500 text-sm hover:underline self-start sm:self-center"
                onClick={()=>dispatch(removeItemFromCart(i.id))}>
                  Remove
                </button>
              </div>
            ))}
          </div>
 
          <div className="bg-white rounded-xl shadow p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2 text-gray-600">
              <span>Subtotal</span>
              <span>{ttl}</span>
            </div>

            <div className="flex justify-between mb-2 text-gray-600">
              <span>Shipping</span>
              <span>$15</span>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span className="text-indigo-600">{ttl + 15}</span>
            </div>

            <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
            onClick={notify}>
              Proceed to Checkout
            </button>
            <ToastContainer />
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Cart;
