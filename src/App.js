import { NavLink, Route, Routes } from "react-router-dom";
import "./styles.css";
import Mockman from "mockman-js";
import { Home } from "./pages/home/home";
import { ProductListing } from "./pages/productListing/productListing";
import { ProductDetails } from "./pages/productDetails/productDetails";
import { Wishlist } from "./pages/wishlist/wishlist";
import { Cart } from "./pages/cart/cart";
import { Header } from "./components/header/header";
import { Login } from "./pages/auth/login/login";
import { Signup } from "./pages/auth/signup/signup";
import { Profile } from "./pages/userAccount/Profile";
import { Details } from "./pages/userAccount/details/details";
import { Addresses } from "./pages/userAccount/addresses/addresses";
import { Orders } from "./pages/userAccount/orders/orders";
import { RequiresAuth } from "./components/auth/requiresAuth";
import { AddressForm } from "./components/address-form/addressForm";
import { Checkout } from "./pages/checkout/checkout";
import { Toaster } from "react-hot-toast";
import { MobileMenu } from "./components/mobile-menu/mobileMenu";
import { MobileSearch } from "./components/mobile-search/mobileSearch";
import { useAuthContext } from "./contexts/authContext";
import { MobileFilter } from "./components/mobile-filters/mobileFilter";
import { NotFound } from "./pages/notFound/notFound";
import { OrderSummary } from "./pages/orderSummary/orderSummary";
import { ScrollToTop } from "./components/scroll-to-top/scrollToTop";


function App() {
  const { showMobileSearch, showMobileFilter } = useAuthContext()
  return (
    <div className="App">
      {showMobileSearch && <MobileSearch />}
      {showMobileFilter && <MobileFilter />}
      <nav style={{ textAlign: "center", backgroundColor: "orange", color: "white", display: "none" }}>
        <NavLink to="/">Home</NavLink>  {" "} || {" "}
        <NavLink to="/mockman">Mockman</NavLink> {" "} || {" "}
        <NavLink to="/products">Products</NavLink>  {" "} || {" "}
        <NavLink to="/cart">Cart</NavLink>  {" "} || {" "}
        <NavLink to="/wishlist">Wishlist</NavLink>  {" "} || {" "}
        <NavLink to="/">Home</NavLink>  {" "} || {" "}
        <NavLink to="/login">Login</NavLink>  {" "} || {" "}
        <NavLink to="/signup">Sign Up</NavLink>  {" "} || {" "}
        <NavLink to="/profile">Profile</NavLink>  {" "} || {" "}
        <NavLink to="/addressform">Address Form</NavLink>  {" "} || {" "}
        <NavLink to="/checkout">Checkout</NavLink>  {" "} || {" "}
      </nav>

      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productID" element={<ProductDetails />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addressform" element={<AddressForm />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/summary" element={<OrderSummary />} />

        <Route path="/*" element={<NotFound />} />

        <Route path="/cart" element={<RequiresAuth><Cart /></RequiresAuth>} />
        <Route path="/wishlist" element={<RequiresAuth><Wishlist /></RequiresAuth>} />

        <Route path="/profile" element={<RequiresAuth><Profile /></RequiresAuth>}>
          <Route path='' element={<Details />} />
          <Route path='addresses' element={<Addresses />} />
          <Route path='orders' element={<Orders />} />
        </Route>

      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: "5rem",
        }}
      />
      <ScrollToTop/>
      <MobileMenu />


    </div>
  );
}

export default App;
