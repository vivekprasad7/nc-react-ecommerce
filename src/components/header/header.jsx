import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useFilterContext } from "../../contexts/filterContext";
import { useWishlistContext } from "../../contexts/wishlistContext";
import { useCartContext } from "../../contexts/cartContext";

export const Header = () => {
  const {filterDispatch} = useFilterContext();
  const {wishlist} = useWishlistContext();
  const {cart} = useCartContext();

  return (
    <>
      <header className="header">
        <div className="container c_flex">
          <div className="brand-bar">
            <Link to="/">Home</Link>
          </div>
          <div className="search-bar f_flex">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Search Cakes, Muffins, Desserts..."
              onChange={(e) => filterDispatch({type:"FILTER_BY_SEARCH", payload:e.target.value})}
            />
          </div>
          <nav className="nav-icons c_flex">
            <div className="nav-icon">
              <Link to="/user">
                <i
                  style={{ fontSize: "20px", color: "black" }}
                  className="fa fa-user icon-circle"
                ></i>
              </Link>
            </div>

            <div className="nav-icon">
              <Link to="/wishlist">
                <i className="fa fa-heart icon-circle"></i> <span>{wishlist.length}</span>
              </Link>
            </div>

            <div className="nav-icon">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cart.length}</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
