import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Payout from './pages/Payout';
import ProductDetail from './pages/ProductDetail';
import BoughtProductDetail from './pages/BoughtProductDetail';
import Shop from './pages/Shop';
import UserProducts from './pages/UserProducts';
import Library from './pages/Library';
import SignIn from './pages/Auth/SigIn';
import Settings from './pages/Settings';
import Home from './pages/LandingPage';
import SignUp from './pages/Auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path='shop/' element={<Shop />} />
      <Route path='products/' element={<UserProducts />} />
      <Route path='library/' element={<Library />} />
      <Route path='payouts/' element={<Payout />} />
      <Route path='products/:productSlug/' element={<ProductDetail />} />
      <Route path='library/:productSlug/' element={<BoughtProductDetail />} />
      <Route path='settings/' element={<Settings />} />

      <Route path='login/' element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
