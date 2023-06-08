import React from 'react'
import { useAddressContext } from '../../../contexts/addressContext'
import { AddressForm } from '../../../components/address-form/addressForm'
// import { useNavigate } from 'react-router-dom';
import "./addresses.css"

export const Addresses = () => {
  const {
    addressList,
    removeAddressData, 
    setCheckout,
    isAddressFormVisible,
    setIsAddressFormVisible,
    setIsEdit,
  } =useAddressContext()  
 

  return (
    <>
    <div className='address'>
      <div style={{ filter: isAddressFormVisible ? "blur(10px)" : "" }}>
        <div>
          {
            addressList?.map((el) => <li  key={el._id} style={{border:"solid 1px gray", borderRadius:"10px",padding:"1rem", margin:"1rem"}}>
              <p><b>Name: {el.name}</b></p>
              <p><b>Address:</b> {el.street}, {el.city}</p>
              <p>{el.state}, {el.country}</p>
              <p>Pincode: {el.zipcode}</p>
              <div>
            <button
            className='impact-btn'
            onClick={() => {
              setIsAddressFormVisible(true)
              setCheckout(el)
              setIsEdit(true)
            }}
            >Edit</button>
            <button
            className='impact-btn'
            onClick={()=>{
              removeAddressData(el._id)
              setCheckout({
                _id:"",
                name:"",
                street:"",
                city:"",
                zipcode:"",
                state:"",
                country:"",
                mobile:"",
              })
            }}
            >Delete</button>
          </div>
              </li>)
          }
          
        </div>
        <button 
        className='impact-btn'
          style={{cursor:"pointer"}}
          onClick={() => {
          setIsAddressFormVisible(true) 
          setCheckout({
            name:"",
            street:"",
            city:"",
            zipcode:"",
            state:"",
            country:"",
            mobile:""
          })
          }}>Add Address</button>
      </div>
    </div>
    {isAddressFormVisible && <div className='address-modal'><AddressForm/></div> }

    </>
  )
}
