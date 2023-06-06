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
    style={{display: isAddressFormVisible ? "" : "none"}}
    >
         
        <h4 className='a-heading' >Add New Address</h4>

        <span className='xmark'  onClick={() => setIsAddressFormVisible(false)}><i
          class="fa fa-xmark"
        ></i>X</span>

       
        <div className='a-input'>
                <input id='name' placeholder='Name'
                value={checkout.name}
                onChange={(e) => setCheckout({...checkout, name: e.target.value})}
                required
                />
        </div>
        <div className='a-input'>
                <input id='street' placeholder='Street'
                value={checkout.street}
                onChange={(e) => setCheckout({...checkout, street: e.target.value})}
                required
                />
        </div>
     
        <div className='a-input'>
                <input id='city' placeholder='City'
                value={checkout.city}
                onChange={(e) => setCheckout({...checkout, city: e.target.value})}
                required
                />
        </div>
        <div className='a-input'>
                <input id='zipcode' placeholder='Pincode'
                value={checkout.zipcode}
                onChange={(e) => setCheckout({...checkout, zipcode: e.target.value})}
                required
                />
        </div>
        <div className='a-input'>
                <input id='state' placeholder='State'
                value={checkout.state}
                onChange={(e) => setCheckout({...checkout, state: e.target.value})}
                required
                />
        </div>
        <div className='a-input'>
                <input id='country' placeholder='Country'
                value={checkout.country}
                onChange={(e) => setCheckout({...checkout, country: e.target.value})}
                required
                />
        </div>
        <div className='a-input'>
                <input id='mobile' placeholder='Mobile No.'
                value={checkout.mobile}
                onChange={(e) => setCheckout({...checkout, mobile: e.target.value})}
                required
                />
        </div>
        <button onClick={handleAddressForm}>{ isEdit ? "Save Address" : "Add Address"}</button>
    </div>
  )
}
