import olx from "../assets/olx.png";
import lens from "../assets/lens.png";
import arrow from "../assets/arrow.png";
import search from "../assets/search.png";
import "../index.css";
import Login from "./Login";
import { useState } from "react";
import { useUser } from "../hooks/contexts/UserContext";
import { logout } from "../firebase";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loginPop, setLoginPop] = useState<boolean>(false);
  const { userName, userPhoto } = useUser();
  return (
    <div className="flex justify-between items-center p-3 bg-slate-100 sticky w-full top-0">
      <img src={olx} className="w-12 h-7 ml-3 mr-2" alt="" />
      <div className="flex gap-2 w-64 border-2 border-black p-2 rounded bg-white">
        <img src={lens} className="w-18 h-6" alt="" />
        <input
          type="text"
          className="w-full outline-none"
          placeholder="India"
        />
        <img src={arrow} className="w-9 h-5" alt="" />
      </div>
      <div className="flex">
        <div className="flex sm:w-[200px] md:w-[400px] lg:w-[700px] border-2 border-black bg-white p-2 ml-2 rounded-l ">
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Find Cars,Mobile Phones and more...."
          />
        </div>
        <img src={search} className="w-16  h-13 rounded-r" alt="" />
      </div>
      <div className="cursor-pointer hidden lg:flex mr-1">
        <h1 className="font-bold">ENGLISH</h1>
        <div className="ml-1 w-7 h-7">
          <img src={arrow} alt="" />
        </div>
      </div>
      {userName ? (
        <div
          className="hidden md:flex items-center gap-3 cursor-pointer  ml-1"
          title={userName}
        >
          <div>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              fill-rule="evenodd"
            >
              <path d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z"></path>
            </svg>
          </div>
          <div>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              fill-rule="evenodd"
            >
              <path d="M730.855 763.955h-435.559c-0.833-87.945-2.676-279.627-2.676-289.496 0-119.351 98.911-216.463 220.498-216.463s220.455 97.112 220.455 216.463c0 10-1.843 201.594-2.72 289.496v0zM819.282 748.603c0.92-93.341 2.062-266.38 2.062-274.144 0-141.589-98.692-260.545-231.64-294.319 2.192-7.237 3.684-14.782 3.684-22.765 0-44.345-35.969-80.27-80.27-80.27-44.345 0-80.27 35.923-80.27 80.27 0 7.983 1.491 15.483 3.684 22.765-132.948 33.731-231.64 152.687-231.64 294.319 0 7.721 1.14 182.339 2.019 276.030l-90.27 36.581 0.92 64.609h316.032c3.729 40.881 37.679 73.031 79.523 73.031s75.794-32.151 79.523-73.031h312.962l1.754-64.523-88.078-38.556z"></path>
            </svg>
          </div>
          <div className="flex items-center gap-1 profile">
            <img
              src={userPhoto || ""}
              alt="User"
              className="w-10 h-10 rounded-full "
            />
            <img src={arrow} className="w-6 h-5" alt="" />
            <div className="absolute top-14  rounded-md shadow-lg bg-white w-[10em]  py-2 hidden view">
              <a className="flex gap-5 ml-5 py-1 hover:text-cyan-400">
                <svg
                  width="23px"
                  height="23px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  fill-rule="evenodd"
                >
                  <path d="M550.789 744.728c0 21.41-17.377 38.789-38.789 38.789s-38.789-17.377-38.789-38.789 17.377-38.789 38.789-38.789 38.789 17.377 38.789 38.789zM686.546 415.030c0 82.89-58.105 152.513-135.757 170.201v43.131l-38.789 38.789-38.789-38.789v-77.575l38.789-38.789c53.489 0 96.97-43.481 96.97-96.97s-43.481-96.97-96.97-96.97-96.97 43.481-96.97 96.97l-38.789 38.789-38.789-38.789c0-96.232 78.312-174.546 174.546-174.546s174.546 78.312 174.546 174.546zM512 861.090c-192.505 0-349.090-156.626-349.090-349.090 0-192.505 156.587-349.090 349.090-349.090 192.466 0 349.090 156.587 349.090 349.090 0 192.466-156.626 349.090-349.090 349.090zM512 85.333c-235.288 0-426.667 191.379-426.667 426.667s191.379 426.667 426.667 426.667 426.667-191.379 426.667-426.667-191.379-426.667-426.667-426.667z"></path>
                </svg>
                <p>Help</p>
              </a>
              <a className="flex gap-5 ml-5 py-1 hover:text-cyan-400">
                <svg
                  width="23px"
                  height="23px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  fill-rule="evenodd"
                >
                  <path d="M873.997 456.711H819.182C811.047 414.001 794.347 374.323 770.704 339.651L809.444 300.892V259.727L767.653 217.918H726.489L687.73 256.677C653.058 233.054 613.38 216.334 570.67 208.199V153.384L541.552 124.266H482.455L453.337 153.384V208.199C410.628 216.334 370.949 233.054 336.277 256.677L297.518 217.918H256.334L214.544 259.727V300.892L253.303 339.651C229.661 374.323 212.96 414.001 204.825 456.711H150.011L120.893 485.829V544.926L150.011 574.044H204.825C212.96 616.753 229.661 656.431 253.303 691.103L214.544 729.863V771.047L256.334 812.837H297.518L336.277 774.078C370.949 797.72 410.628 814.421 453.337 822.556V877.37L482.455 906.488H541.552L570.67 877.37V822.556C613.38 814.421 653.058 797.72 687.73 774.078L726.489 812.837H767.653L809.444 771.047V729.863L770.704 691.103C794.347 656.431 811.047 616.753 819.182 574.044H873.997L903.115 544.926V485.829L873.997 456.711ZM512.004 750.044C382.605 750.044 277.337 644.776 277.337 515.377C277.337 385.978 382.605 280.711 512.004 280.711C641.403 280.711 746.67 385.978 746.67 515.377C746.67 644.776 641.403 750.044 512.004 750.044ZM512.004 350.839C421.266 350.839 347.463 424.641 347.463 515.379C347.463 606.117 421.266 679.92 512.004 679.92C602.741 679.92 676.544 606.117 676.544 515.379C676.544 424.641 602.741 350.839 512.004 350.839ZM512.004 601.697C464.405 601.697 425.685 562.977 425.685 515.379C425.685 467.781 464.405 429.061 512.004 429.061C559.602 429.061 598.322 467.781 598.322 515.379C598.322 562.977 559.602 601.697 512.004 601.697Z"></path>
                </svg>
                <p>Settings</p>
              </a>
              <a
                className="flex gap-5 ml-5 py-1 hover:text-cyan-400"
                onClick={() => logout()}
              >
                <svg
                  width="23px"
                  height="23px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  fill-rule="evenodd"
                >
                  <path d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"></path>
                </svg>
                <p>Logout</p>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex cursor-pointer underline hover:no-underline ml-1">
          <h1
            className="font-bold"
            onClick={() => setLoginPop((prev: boolean) => !prev)}
          >
            Login
          </h1>
        </div>
      )}
      <div className="flex cursor-pointer border-4 py-2 px-3 rounded-full mr-4 ml-2 border-yellow-300">
        <Link to={'/post'}>
          <h1 className="font-bold"> +&nbsp;SELL</h1>
        </Link>
      </div>
      {loginPop && <Login setLoginPop={setLoginPop} />}
    </div>
  );
};

export default Navbar;
