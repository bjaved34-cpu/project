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
        <h1>asdas</h1>
        <BestSellingProducts showNotification={showNotification}/>
        <Footer/>
      </div>
      
      
    </>
  );
};

export default Home;
