import React, { useState } from 'react'
import { useAddressContext } from '../../contexts/addressContext'
import {v4 as uuid} from 'uuid'
import "./addressForm.css"

export const AddressForm = () => {
    const {
        addAddressData, 
        removeAddressData, 
        editAddress,
        addressList,
        checkout,
        setCheckout,
        isAddressFormVisible,
        setIsAddressFormVisible,
        isEdit,
        setIsEdit,
        handleAddressForm,
    } = useAddressContext();

    const checkoutInitial = {
        _id:"",
        name:"",
        street:"",
        city:"",
        zipcode:"",
        state:"",
        country:"",
        mobile:""
    }


  


  return (
    <div className='form-address'
    // style={{display: isAddressFormVisible ? "" : "none"}}
    >
        <h2  >Add New Address</h2>

        <i
          onClick={() => setIsAddressFormVisible(false)}
          class="fa-solid fa-x"
        ></i>

        <div className='form-input'>
                <label for='name'>Name: </label>
                <input id='name' placeholder='Howard Roark'
                value={checkout.name}
                onChange={(e) => setCheckout({...checkout, name: e.target.value})}
                required
                />
        </div>
        <div className='form-input'>
                <label for='street'>Street: </label>
                <input id='street' placeholder='Street'
                value={checkout.street}
                onChange={(e) => setCheckout({...checkout, street: e.target.value})}
                required
                />
        </div>
     
        <div className='form-input'>
                <input id='city' placeholder='City'
                value={checkout.city}
                onChange={(e) => setCheckout({...checkout, city: e.target.value})}
                required
                />
        </div>
        <div className='form-input'>
                <label for='zipcode'>Zipcode: </label>
                <input id='zipcode' placeholder='54321'
                value={checkout.zipcode}
                onChange={(e) => setCheckout({...checkout, zipcode: e.target.value})}
                required
                />
        </div>
        <div className='form-input'>
                <label for='state'>State: </label>
                <input id='state' placeholder='New York'
                value={checkout.state}
                onChange={(e) => setCheckout({...checkout, state: e.target.value})}
                required
                />
        </div>
        <div className='form-input'>
                <label for='country'>Country: </label>
                <input id='country' placeholder='United States'
                value={checkout.country}
                onChange={(e) => setCheckout({...checkout, country: e.target.value})}
                required
                />
        </div>
        <div className='form-input'>
                <label for='mobile'>Mobile: </label>
                <input id='mobile' placeholder='9876543210'
                value={checkout.mobile}
                onChange={(e) => setCheckout({...checkout, mobile: e.target.value})}
                required
                />
        </div>
        <button onClick={handleAddressForm}>{ isEdit ? "Save Address" : "Add Address"}</button>
    </div>
  )
}
