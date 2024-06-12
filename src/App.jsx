import { useState } from 'react';

import './App.scss';

import Aside from './Components/Aside/aside';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';

import Home from './Pages/Home/home';
import Second from './Pages/Second';
import Third from './Pages/Third';
import Product from './Pages/Product/Product';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <Header setIsOpen={setIsOpen} />
      {isOpen && <Aside setIsOpen={setIsOpen} />}
      <Routes>
        <Route path="/myreactlearning" element={<Home />} />
        <Route path="/myreactlearning/second" element={<Second />} />
        <Route path="/myreactlearning/third" element={<Third />} />
        <Route path="/myreactlearning/product/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
