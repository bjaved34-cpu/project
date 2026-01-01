import BestSellingProducts from "./components/BestSellingProducts";
import CategoryMainPage from "./components/CategoryMainPage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

const Home = ({showNotification}) => {
  return (
    <>
       <div className="w-full">
        <Nav/>
        <Hero/>
        <CategoryMainPage/>
        <BestSellingProducts showNotification={showNotification}/>
        <Footer/>
      </div>
      
      
    </>
  );
};

export default Home;
