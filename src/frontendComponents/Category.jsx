import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/productsDataSlice";
import { useNavigate } from "react-router-dom";
import ProductCard from "./components/ProductCard"

const Category = ({showNotification}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const { loading, error, products } = useSelector((state) => state.products);
  const category = [...new Set(products.map((p) => p.category))];
  //console.log(category)
  const navigate = useNavigate();
  return (
    <>
      <Nav />
           <section class="w-full py-16 px-6 md:px-12 bg-white">
        <div class="max-w-6xl mx-auto text-center" >
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 ">
            Shop by Categories
          </h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/*  {loading & <p>Loading</p>}
          {error & <p>error</p> } */}
            {category.map((p) => (
              <div
                class="group bg-[#7b8da8] hover:bg-blue-50 transition p-6 rounded-xl flex flex-col items-center text-center cursor-pointer shadow-md hover:shadow-lg"
                onClick={() => navigate(`/Product?cat=${p}`)}
              >
                <p class="text-gray-800 font-medium">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="w-full py-16 px-6 md:px-12 bg-gray-50">
          <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            All Products
          </h2>
        <div class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} title={p.title} price={p.price} image={p.image} id={p.id} showNotification={showNotification}/>
          ))}
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Category;
