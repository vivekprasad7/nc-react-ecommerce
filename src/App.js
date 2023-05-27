import { NavLink, Route, Routes } from "react-router-dom";
import "./styles.css";
import Mockman from "mockman-js";
import { Home } from "./pages/home/home";
import { ProductListing } from "./pages/productListing/productListing";
import { ProductDetails } from "./pages/productDetails/productDetails";
import { Wishlist } from "./pages/wishlist/wishlist";
import { Cart } from "./pages/cart/cart";
import { Header } from "./components/header/header";


function App() {
  return (
    <div className="App">
      <nav style={{textAlign:"center", backgroundColor:"orange", color:"white"}}>
        <NavLink to="/">Home</NavLink>  {" "} || {" "}
        <NavLink to="/mockman">Mockman</NavLink> {" "} || {" "}
        <NavLink to="/products">Products</NavLink>  {" "} || {" "}
        <NavLink to="/cart">Cart</NavLink>  {" "} || {" "}
        <NavLink to="/wishlist">Wishlist</NavLink>  {" "} || {" "}
        <NavLink to="/">Home</NavLink>  {" "} || {" "}   
      </nav>

      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductListing/>}/>
      <Route path="/products/:productID" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
