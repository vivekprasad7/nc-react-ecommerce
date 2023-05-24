import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
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
                <i className="fa fa-heart icon-circle"></i> <span>0</span>
              </Link>
            </div>

            <div className="nav-icon">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>0</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
