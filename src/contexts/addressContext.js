import { createContext, useContext, useEffect, useState } from "react";
import {v4 as uuid} from 'uuid'

import { useAuthContext } from "./authContext";
import { addAddressService, editAddressService, getAddressDataService, removeAddressService } from "../services/dataFetchServices";
import { toast } from "react-hot-toast";

export const AddressContext = createContext();

export const AddressContextProvider = ({children}) => {

    const {authState:{token}} = useAuthContext();
    const [addressList, setAddressList] = useState([]);
    const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const checkoutInitial = {
        _id:"",
        name:"",
        street:"",
        city:"",
        zipcode:"",
        state:"",
        country:"",
        mobile:"",
    }

    const [ checkout, setCheckout] = useState(checkoutInitial);

    const getAddressData = async () => {
        try{   
            const { status, data} = await getAddressDataService(token);

            if(status === 200){
                setAddressList(data?.address)
            }
        } catch(e){
            console.error(e);
        }
    }

    const addAddressData = async (addressInput) => {
        try{
            const {status, data} = await addAddressService(addressInput, token)

            if ( status === 201){
                setAddressList(data?.address)
                //console.log("addAddressData",data)
            }
        } catch(e){
            console.error("addAddressData_Error",e)
        }
    }

    const removeAddressData = async(addressID) => {
        try{
            const {status, data} = await removeAddressService(addressID, token);
            if ( status ===200){
                setAddressList(data?.address)
            }
        } catch(e){
            console.error(e)
        }
    }

    const editAddress = async (addressInput, addressID) => {
        try{
            const {status, data} = await editAddressService(addressInput, addressID, token)

            if(status ===201){
                setAddressList(data?.address)
                //console.log("edit", data )
            }
        } catch(e){
            console.error(e)
            //console.log("edit", e)
        }
    }

    const handleAddressForm = () => {

        
        const isAddressPresent =   addressList.find((address) => address._id === checkout._id)

        if (isAddressPresent){
            editAddress(checkout, isAddressPresent._id)
            setIsAddressFormVisible(false);
        } else {
            if ( 
                checkout.name !== "" ||
                checkout.street !== "" ||
                checkout.city !== "" ||
                checkout.zipcode !== "" ||
                checkout.state !== "" ||
                checkout.country !== "" ||
                checkout.mobile !== "" 
            ) {
                addAddressData({...checkout, _id:uuid()});
                setCheckout({
                    ...checkout,
                    _id:"",
                    name:"",
                    street:"",
                    city:"",
                    zipcode:"",
                    state:"",
                    country:"",
                    mobile:""
                })
                toast.success("Fill all input fields")

            } else{
                toast.error("Fill all input fields")

            }
            setIsAddressFormVisible(false);
            setIsEdit(false);
        }
    }


    useEffect(()=>{
        if(token){
            getAddressData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])


    return(<AddressContext.Provider value={{
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
        }}>{children}</AddressContext.Provider>)
}

export const useAddressContext = () => useContext(AddressContext);