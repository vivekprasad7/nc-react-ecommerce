import React from 'react'
import "./mobileSearch.css"
import { useFilterContext } from '../../contexts/filterContext'
import { useNavigate } from 'react-router-dom';

export const MobileSearch = () => {
    const {filterDispatch} = useFilterContext();
    const navigate = useNavigate();
  return (
    <>
    <div className='mobile-search'>
    <div className='mobile-search-menu'>
            {/* <i className="fa fa-search"></i> */}
            <input
              type="search"
              placeholder="Search Cakes, Muffins, Desserts..."
              onChange={(e) => {
                navigate("/products");
              filterDispatch({type:"FILTER_BY_SEARCH", payload:e.target.value})
            }}

            />
        </div>  
    </div>
    </>
  )
}

