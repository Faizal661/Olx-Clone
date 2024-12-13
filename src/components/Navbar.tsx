import olx from "../assets/olx.png";
import lens from "../assets/lens.png";
import arrow from "../assets/arrow.png";
import search from "../assets/search.png";
import Login from "./Login";
import { useState } from "react";
import { useUser } from "../hooks/contexts/UserContext";
const Navbar = () => {
  const [loginPop, setLoginPop] = useState<boolean>(false);
  const { userName, userPhoto } = useUser();
  return (
    <>
      <div className="flex justify-between items-center p-3 bg-slate-100">
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
            className="hidden md:flex items-center  cursor-pointer  ml-1"
            title={userName}
          >
            <img
              src={userPhoto || ""}
              alt="User"
              className="w-10 h-10 rounded-full mr-2"
            />
            <p>{userName.slice(0, 7) + "..."}</p>
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
          <h1 className="font-bold"> +&nbsp;SELL</h1>
        </div>
      </div>
      {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  );
};

export default Navbar;
