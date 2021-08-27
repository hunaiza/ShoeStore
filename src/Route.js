import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import NavBar from './Components/Navbar';
import Cart from './Components/Cart';

function Routess() {

  return (
	<div>
        <Router>
          <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                 <Route path="/about" element={<About />}/>
                <Route exact path="/product" element={<Product />}/>
                <Route path="/product/:id" element={<ProductItem />}/>
                <Route path="/cart/:id" element={<Cart />} />
                <Route path="*" element={()=><h2>404 Not Found</h2>}/>
            </Routes>
        </Router>
	</div>
  );
}

export default Routess;