import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import Header from "./components/Header";
import { ProductProvider } from "./context/ProductContext";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <ProductProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/wishlist" element={<Wishlist />}></Route>
            </Routes>
          </ProductProvider>
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  );
};

export default App;
