import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./contexts/productsContext";
import { FilterContextProvider } from "./contexts/filterContext";
import { AuthContextProvider } from "./contexts/authContext";
import { DataContextProvider } from "./contexts/dataContext";
import { WishlistContextProvider } from "./contexts/wishlistContext";
import { CartContextProvider } from "./contexts/cartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductsContextProvider>
          <DataContextProvider>
            <WishlistContextProvider>
              <CartContextProvider>
              <FilterContextProvider>
                <App />
              </FilterContextProvider>
              </CartContextProvider>
            </WishlistContextProvider>
          </DataContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
