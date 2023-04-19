import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path='products/:productSlug/' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
