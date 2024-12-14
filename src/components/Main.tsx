import { Routes, Route, } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

import Home from "./Home";
import SingleProduct from "./SingleProduct";
import { useUser } from "../hooks/contexts/UserContext";
import Post from "./Post";

const Main = () => {
  const {setUser}=useUser()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUser('','')
      }
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<SingleProduct />} />
        <Route path="/post" element={<Post/>} />
      </Routes>
    </div>
  );
};

export default Main;
