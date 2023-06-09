import React from "react";
import "./mobileFilter.css";
import { Sidebar } from "../sidebar/sidebar";
import { useFilterContext } from "../../contexts/filterContext";
import { useProductsContext } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";

export const MobileFilter = () => {
  const { filterState, filterDispatch } = useFilterContext();
  const { categoryData } = useProductsContext();
  const navigate = useNavigate();

  const handleClearAll = () => {
    filterDispatch({ type: "CLEAR_ALL_FILTERS" });
  };

  const stars = [1, 2, 3, 4];
  return (
    <div className="mobile-filter">
      <div className="mobile-sidebar">
        <div className="sidebar-title">
          <h3 className="sidebar-heading">FILTERS</h3>

          <span>
            <button className="sidebar-btn" onClick={handleClearAll}>
              Reset
            </button>
          </span>
        </div>

        <div className="price-filter">
          <h4>Price</h4>

          <div>
            <div className="range-values">
              <p>50</p>
              <p>500</p>
              <p>1500</p>
            </div>

            <input
              type="range"
              name="inputPriceRange"
              className="input-price"
              min="50"
              max="1500"
              step="100"
              value={filterState?.priceRange}
              onChange={(e) =>{
                navigate('/products')
                filterDispatch({
                  type: "FILTER_BY_PRICE_RANGE",
                  payload: e.target.value,
                })
              }}
            />
          </div>
        </div>

        <div className="category-filter">
          <h4>Category</h4>
          <div className="vertical-flex">
            {categoryData.map(({ categoryName }) => (
              <div key={categoryName}>
                <label>
                  <input
                    type="checkbox"
                    checked={filterState?.categories.includes(categoryName)}
                    onChange={() => {
                        navigate('/products')
                      filterDispatch({
                        type: "FILTER_BY_CATEGORY",
                        payload: categoryName,
                      })
                    }}
                  />{" "}
                  {categoryName}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="rating-filter">
          <h4>Rating</h4>
          <div className="vertical-flex">
            {stars.map((rating) => {
              return (
                <li key={rating}>
                  <label>
                    <input
                      type="radio"
                      name="ratings"
                      value={rating}
                      checked={rating === +filterState.sortByRating}
                      onChange={(e) =>{

                        navigate('/products')
                        filterDispatch({
                          type: "FILTER_BY_RATING",
                          payload: e.target.value,
                        })
                      }}
                    />{" "}
                    {rating} Stars and Above
                  </label>
                </li>
              );
            })}
          </div>
        </div>

        <div className="sort-filter">
          <h4>Sort By</h4>
          <div className="vertical-flex">
            <label>
              <input
                name="sort"
                type="radio"
                checked={filterState.sortByPrice === "LTH"}
                value="LTH"
                onChange={(e) =>{
                    navigate('/products')
                  filterDispatch({ type: "SORT_BY_PRICE", payload: "LTH" })
                }}
              />{" "}
              Price: Low to High
            </label>
            <label>
              <input
                name="sort"
                type="radio"
                checked={filterState.sortByPrice === "HTL"}
                value="HTL"
                onChange={() =>{
                navigate('/products')
                  filterDispatch({ type: "SORT_BY_PRICE", payload: "HTL" })
                }}
              />{" "}
              Price: High to Low
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
