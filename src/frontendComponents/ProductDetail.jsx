import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/productsDataSlice";
import { addToCart } from "../redux/cartSlice";
//import { setNotification} from "./components/useNotification";
import Notification from "./components/Notification";


const ProductDetail = ({showNotification}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const [searchParams] = useSearchParams();
  const { products, loading, error } = useSelector((state) => state.products);
  const {items} = useSelector((state)=>state.cart);
  console.log(items)

  const id = Number(searchParams.get("id"));

  const product = products.find((p) => p.id === id);

  if (loading || !product) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const addTOCartAction = (title)=>{
    dispatch(addToCart(product))
    showNotification(`🛒 ${title} added to cart` , "success")
  }
  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-sm object-contain rounded-xl shadow-md p-4 bg-white"
            />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {product.title}
            </h1>

            <p className="text-sm text-gray-500 capitalize mb-2">
              {product.category}
            </p>

            <p className="text-3xl text-indigo-600 font-semibold mb-5">
              ${product.price}
            </p>

            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg mr-2">⭐</span>
              <p className="text-gray-700">
                {product.rating?.rate} / 5 ({product.rating?.count} reviews)
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition w-full sm:w-auto"
              onClick={()=>addTOCartAction(product.title)}>
                Add to Cart
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition w-full sm:w-auto">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Related Products</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                id={item.id}
                category={item.category}
              />
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
