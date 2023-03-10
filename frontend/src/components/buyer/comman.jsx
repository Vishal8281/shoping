import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cloth from "./categories/cloth";
import Electric from "./categories/Electric";
import Food from "./categories/food";
import Home from "./Home";
import Contact from "./Contact";
import Shop from "../Shop.jsx";
import Order from "../seller/Order";
import Seller from "../seller/seller";
import Shome from "../seller/shome";
import Buy from "./Buy";
import Signup from "./Signup.jsx";
import Login from "./Login";
import Profile from "./profile";
import Book from "./categories/Book";
import Footwear from "./categories/Footwear";
import Stationery from "./categories/Stationery";
import Userorder from "./userorders";
import Cart from "./cart"

const Comman = () => {
  const get = sessionStorage.getItem("userdata");

  const state = JSON.parse(get);
  return (
    <>
      {state ? (
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="shop" element={<Shop />} />
            <Route path="home" element={<Home />} />
            <Route path="cloth" element={<Cloth />} />
            <Route path="electric" element={<Electric />} />
            <Route path="food" element={<Food />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Seller" element={<Seller />} />
            <Route path="Order" element={<Order />} />
            <Route path="shome" element={<Shome />} />
            <Route path="buy" element={<Buy />} />
            <Route path="signup" element={<Signup />} />
            <Route path="profile" element={<Profile />} />
            <Route path="book" element={<Book />} />
            <Route path="footwear" element={<Footwear />} />
            <Route path="stationery" element={<Stationery />} />
            <Route path="userorder" element={<Userorder />} />
            <Route path="cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            {" "}
            <Route index element={<Login />} />{" "}
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default Comman;
