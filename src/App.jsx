// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "./Pages/Home";
import { About } from "./Pages/About";
import { Shop } from "./Pages/Shop";
import { Services } from "./Pages/Services";
import { Login } from "./Pages/Login";
import { ContactUs } from "./Pages/ContactUs";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";
import  ProductCard  from "./Pages/ProductCard";
import { createContext, useState } from "react";
 

const contest=createContext()

function App() {
 const [cart,setcart]=useState([])
  return (
    <contest.Provider value={{cart,setcart}}>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productcard" element={<ProductCard />} />
      </Routes>
    </BrowserRouter>
    </contest.Provider>
  );
}

export {App,contest};
