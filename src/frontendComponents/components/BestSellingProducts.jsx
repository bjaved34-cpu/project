import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import ProductCard from "./ProductCard";
const BestSellingProducts = ({showNotification}) => {
  const { loading, error, products } = useSelector((state) => state.products);
  //console.log(products)
  const limitedProducts = products.slice(0, 5);
  const navigate = useNavigate();
  return (
    <>
      <section class="w-full py-16 px-6 md:px-12 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Best Selling Products
          </h2>
         <div class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {limitedProducts.map((p) => (
            <ProductCard key={p.id} title={p.title} price={p.price} image={p.image} id={p.id} showNotification={showNotification} />
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default BestSellingProducts;
