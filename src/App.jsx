import { useState, createContext, useEffect } from 'react';

import './App.scss';

import Aside from './Components/Aside/aside';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';

import Home from './Pages/Home/home';
import Second from './Pages/Second';
import Third from './Pages/Third';

import { Routes, Route } from 'react-router-dom';

export const CartContext = createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartValue, setCartValue] = useState([]);

  useEffect(() => {
    console.log(cartValue);
  }, [cartValue]);

  return (
    <div className="wrapper">
      <CartContext.Provider value={{ cartValue, setCartValue }}>
        <Header setIsOpen={setIsOpen} />
        {isOpen && <Aside setIsOpen={setIsOpen} />}
        <Routes>
          <Route path="/myreactlearning" element={<Home />} />
          <Route path="/myreactlearning/second" element={<Second />} />
          <Route path="/myreactlearning/third" element={<Third />} />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;
