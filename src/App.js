import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Payout from './pages/Payout';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import SignIn from './pages/Auth/SigIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='shop/' element={<Shop />} />
      <Route path='login/' element={<SignIn />} />
      <Route path='payouts/' element={<Payout />} />
      <Route path='products/:productSlug/' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
