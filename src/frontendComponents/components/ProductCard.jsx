import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

const ProductCard = ({ id, title, image, price, showNotification , category}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCartAction = () => {
    dispatch(addToCart({ id, title, image, price , category }));
    showNotification(`🛒 ${title} added to cart`, "success");
  };

  //dispatch(addToCart({ id, title, image, price }))
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition p-4 rounded-xl cursor-pointer">
 
      <div
        className="w-full h-48 rounded-lg overflow-hidden"
        onClick={() => navigate(`/ProductDetail?id=${id}`)}
      >
        <img
          src={image}
          alt="Product"
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      
      <h3 className="text-lg font-semibold text-gray-800 mt-4 line-clamp-1">
        {title}
      </h3>

      <p className="text-blue-600 font-bold text-lg mt-1">${price}</p>


      <div className="flex items-center mt-1 text-yellow-500">
        ⭐⭐⭐⭐☆
        <span className="ml-2 text-sm text-gray-500">(150)</span>
      </div>

    
      <button
        className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        onClick={() => addToCartAction({ id, title, image, price , category})}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
