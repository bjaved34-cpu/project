import { useSelector } from "react-redux";
import Nav from "./components/Nav";

const Cart = () => {
    const { items } = useSelector((state) => state.cart);
    
  return (
    <>
  <Nav/>
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT: CART ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>

          {/* Cart Item */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row gap-4">
            <img
              src={items.image}
              alt="product"
              className="w-full sm:w-32 h-32 object-contain rounded-lg bg-gray-100"
            />

            <div className="flex-1">
              <h2 className="font-semibold text-lg text-gray-800">
                Product Title Here
              </h2>
              <p className="text-sm text-gray-500 mt-1">Category Name</p>

              <div className="flex items-center justify-between mt-4">
                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button className="px-3 py-1 border rounded-md">−</button>
                  <span className="font-medium">1</span>
                  <button className="px-3 py-1 border rounded-md">+</button>
                </div>

                {/* Price */}
                <p className="font-semibold text-indigo-600">$49.99</p>
              </div>
            </div>

            {/* Remove */}
            <button className="text-red-500 text-sm hover:underline self-start sm:self-center">
              Remove
            </button>
          </div>

          {/* Repeat Cart Item */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row gap-4">
            <img
              src="https://via.placeholder.com/150"
              alt="product"
              className="w-full sm:w-32 h-32 object-contain rounded-lg bg-gray-100"
            />

            <div className="flex-1">
              <h2 className="font-semibold text-lg text-gray-800">
                Another Product
              </h2>
              <p className="text-sm text-gray-500 mt-1">Category Name</p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <button className="px-3 py-1 border rounded-md">−</button>
                  <span className="font-medium">2</span>
                  <button className="px-3 py-1 border rounded-md">+</button>
                </div>

                <p className="font-semibold text-indigo-600">$89.99</p>
              </div>
            </div>

            <button className="text-red-500 text-sm hover:underline self-start sm:self-center">
              Remove
            </button>
          </div>
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2 text-gray-600">
            <span>Subtotal</span>
            <span>$139.98</span>
          </div>

          <div className="flex justify-between mb-2 text-gray-600">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t my-4"></div>

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="text-indigo-600">$139.98</span>
          </div>

          <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
