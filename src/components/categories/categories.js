import React from 'react'
import { useProductsContext } from '../../contexts/productsContext'
import "./categories.css"
import { useFilterContext } from '../../contexts/filterContext';
import { useNavigate } from 'react-router-dom';

export const Categories = () => {
    const {categoryData } = useProductsContext();
    const {filterDispatch} = useFilterContext();
    const navigate = useNavigate();
  return (
   <>
       <div className='cat-container'>
        <h2 className='cat-heading'>Categories</h2>
        <div className='cat-cards'>
        {
            categoryData.map((category) => (
                <div 
                onClick={() => {
                    filterDispatch({ type: "CLEAR_ALL_FILTERS" });
                    filterDispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: category.categoryName,
                    });
                    navigate("/products");
                  }}
                className='cat-unit' >
                <img src={category.image} alt={category.categoryName} />
                <h4>{category.categoryName}</h4>
                </div>
            ))
        }
        </div>

    </div>
   </>
  )
}
