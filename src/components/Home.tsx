import Ads from "./Ads";
import ad1 from "../assets/ads/ad1.png";
import ad2 from "../assets/ads/ad2.png";
import Menu from "./Menu";
import Products from "./Products";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Home = () => {
  const [prod,setProd]=useState([])

  const getProducts=()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProd(json))
            // .then(json=>console.log(json))
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div className="">
      <Navbar />
      <Menu />
      <Ads image={ad1} />
      <Products products={prod}/>
      <Ads image={ad2} />
      <Footer />
    </div>
  );
};

export default Home;
