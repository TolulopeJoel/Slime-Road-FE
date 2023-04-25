import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Payout from './pages/Payout';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import UserProducts from './pages/UserProducts';
import Library from './pages/Library';
import SignIn from './pages/Auth/SigIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='shop/' element={<Shop />} />
      <Route path='products/' element={<UserProducts />} />
      <Route path='library/' element={<Library />} />
      <Route path='login/' element={<SignIn />} />
      <Route path='payouts/' element={<Payout />} />
      <Route path='products/:productSlug/' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
