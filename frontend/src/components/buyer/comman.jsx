import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cloth from "./categories/cloth";
import Electric from "./categories/Electric";
import Food from "./categories/food";
import Home from "./Home";
import Contact from "./Contact";
import Shop from "../Shop.jsx";
import Order from "../seller/Order"
import Seller from "../seller/seller";
import Dashboard from "../seller/shome";
import Shome from "../seller/shome";
import Buy from "./Buy";

const Comman = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Shop />} />
          <Route path="home" element={<Home />} />
          <Route path="cloth" element={<Cloth />} />
          <Route path="electric" element={<Electric />} />
          <Route path="food" element={<Food />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Seller" element={<Seller/>} />
          <Route path="Order" element={<Order/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="shome" element={<Shome/>} />
          <Route path="buy" element={<Buy/>} />


          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Comman;
