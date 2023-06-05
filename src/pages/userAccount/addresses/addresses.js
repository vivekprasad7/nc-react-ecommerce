import React from 'react'
import { useAddressContext } from '../../../contexts/addressContext'
// import { useNavigate } from 'react-router-dom';

export const Addresses = () => {
  const {addressList} =useAddressContext()
 

  return (
    <>
    <div className='address'>

      {addressList.map((el) => <li>{el.name}</li>)}

    </div>
    </>
  )
}
