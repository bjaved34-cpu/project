import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ProductCard from "./components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/productsDataSlice";


const Product = ({ showNotification }) => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const { products, loading, error } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
 

  
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("cat"); // Get the 'category' parameter
  const filterByCat = category
    ? products.filter((p) => p.category === category)
    : products;
 if (loading || !products) {
    return <div className="text-center py-20">Loading...</div>;
  }
   const currentProducts = filterByCat.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filterByCat.length / itemsPerPage);

  return (
    <>
      <Nav />
      <section class="w-full py-16 px-6 md:px-12 bg-gray-50">
          <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {category}
          </h2>
        <div class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentProducts.map((p) => (
            <ProductCard key={p.id} title={p.title} price={p.price} image={p.image} id={p.id} showNotification={showNotification} />
          ))}
        </div>
        </div>
        <div style={{ marginTop: "20px" }}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              padding: "8px 12px",
              marginRight: "5px",
              background: currentPage === index + 1 ? "#000" : "#ddd",
              color: currentPage === index + 1 ? "#fff" : "#000"
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </section>

      <Footer />
    </>
  );
};

export default Product;
