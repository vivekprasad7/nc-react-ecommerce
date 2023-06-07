import React from 'react'
import { useAddressContext } from '../../contexts/addressContext';
import { AddressForm } from '../address-form/addressForm';
import "./selectAddress.css"

export const SelectAddress = () => {
    const {
        addressList,
        isAddressFormVisible,
        setIsAddressFormVisible,
        checkout,
        setCheckout,
      } = useAddressContext();
  return (
    <>
    <div className='select-address'>
        <h2>Select Address</h2>
        {addressList.length === 0 && <h2>No address found in your list. Please add one to continue.</h2>}

        {
            addressList.map((el) => {

                return(
            <div key={el._id} className='checkout-address-list'>

                <input
                type="radio"
                name="address"
                checked={checkout._id === el._id}
                onChange={() => setCheckout(el)}
              />

              <div className='address-item'>
              <p><b>Name: {el.name}</b></p>
              <p><b>Address:</b> {el.street}, {el.city}</p>
              <p>{el.state}, {el.country}</p>
              <p>Pincode: {el.zipcode}</p>
              </div>

            </div>

                )
            })
        }
        <button
        onClick={() => {
            setIsAddressFormVisible(true);
            setCheckout({
                name:"",
                street:"",
                city:"",
                zipcode:"",
                state:"",
                country:"",
                mobile:"",
            })
        }}
        >ADD NEW ADDRESS</button>


    </div>
    {isAddressFormVisible && <div className='address-modal'><AddressForm/></div> }

    </>
  )
}
