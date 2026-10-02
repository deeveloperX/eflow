import './App.css';
import Products from './Components/Products'
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import OrderSuccess from './Components/OrderSuccess';
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './Components/Navbar';
import Deals from './Components/Deals';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/deals' element={<Deals />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
