import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Ads from "./Ads";
import ad2 from "../assets/ads/ad2.png";


const SingleProduct = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Menu />
      <div className="flex mx-52 my-14 justify-">
        <div className="border border-black  px-16 bg-black w-[170em] rounded-sm">
          <img
            src={location?.state?.data?.image}
            alt=""
            className="w-[100em] h-[28em]"
          />
        </div>
        <div className="ml-14">
          <div className="border border-slate-300 py-3 pl-5 rounded-md">
            <h1 className="font-bold text-3xl mt-2">
              ₹ {location?.state?.data?.price}
            </h1>
            <h1 className="font-semibold">{location?.state?.data?.title}</h1>
          </div>
          <div className="border border-slate-300 py-3 pl-5 rounded-md mt-5">
            <h1 className="font-bold">Chat with seller ...</h1>
            <h1 className="font-semibold text-blue-600 mt-3">
              <span className="text-black">Phone: ** *** ** *** </span>Show
              number
            </h1>
          </div>
          <div className="border border-slate-300 py-3 pl-5 rounded-md mt-5">
            <h1 className="font-semibold mt-4">
              {location?.state?.data?.category} 
            </h1>
            <h1 className="font-bold mt-4">
              Description :
            </h1>
            <h1 className="font-semibold mt-1">
              {location?.state?.data?.description}
            </h1>
          </div>
        </div>
      </div>
      <Ads image={ad2}/>
      <Footer />
    </div>
  );
};

export default SingleProduct;
