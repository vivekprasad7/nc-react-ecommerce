import React from "react";
import "./sidebar.css"

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4>Filter Products</h4>
      <span>
        <button>Clear Filters</button>
      </span>

      <div className="price-filter">
        <h4>Price</h4>

        <div>
          <div className="range-values">
            <p>100</p>
            <p>500</p>
            <p>1000</p>
          </div>

          <input
            type="range"
            name="inputPriceRange"
            className="input-price"
            min="0"
            max="3000"
            value=""
          />
        </div>
      </div>

      <div className="category-filter">
        <h4>Category</h4>
        <div>
          <label>
            <input name="category" type="checkbox" className="input-category" />{" "}
            : Cakes
          </label>

          <label>
            <input name="category" type="checkbox" className="input-category" />{" "}
            : Muffins and Pastries
          </label>

          <label>
            <input name="category" type="checkbox" className="input-category" />{" "}
            : Dessets
          </label>
        </div>
      </div>

      <div className="rating-filter">
        <h4>Rating</h4>
        <div>
            <label><input type="radio"/> : 1 Stars and above</label>
            <label><input type="radio"/> : 2 Stars and above</label>
            <label><input type="radio"/> : 3 Stars and above</label>
            <label><input type="radio"/> : 4 Stars and above</label>
        </div>
      </div>

      <div className="sort-filter">
        <h4>Sort By</h4>
        <div>
            <label><input type="radio"/> : Price: Low to High</label>
            <label><input type="radio"/> : Price: High to Low</label>
        </div>

      </div>



    </div>
  );
};
