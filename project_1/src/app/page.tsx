import Features from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductsList from "@/components/ProductsList";
import Registration from "@/components/Registration";

const Home = () => {
  return (
    <div>

      <Registration />
      <Hero/>
      <Features/>
      <ProductsList/>
      <Footer/>
      
    </div>
  );
};

export default Home;

