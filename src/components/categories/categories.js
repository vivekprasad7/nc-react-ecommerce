import React from 'react'
import { useProductsContext } from '../../contexts/productsContext'
import "./categories.css"

export const Categories = () => {
    const {categoryData } = useProductsContext();
  return (
   <>
       <div className='cat-container'>
        <h2 className='cat-heading'>Categories</h2>
        <div className='cat-cards'>
        {
            categoryData.map((category) => (
                <div className='cat-unit'>
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
