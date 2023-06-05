import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./authContext";
import { addAddressService, editAddressService, getAddressDataService, removeAddressService } from "../services/dataFetchServices";

export const AddressContext = createContext();

export const AddressContextProvider = ({children}) => {

    const {authState:{token}} = useAuthContext();
    const [address, setAddress] = useState([]);
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
        mobile:""
    }

    const [ checkout, setCheckout] = useState(checkoutInitial);

    const getAddressData = async () => {
        try{   
            const { status, data} = await getAddressDataService(token);

            if(status === 200){
                setAddress(data?.address)
            }
        } catch(e){
            console.error(e);
        }
    }

    const addAddressData = async (addressInput) => {
        try{
            const {status, data} = await addAddressService(addressInput, token)

            if ( status === 201){
                setAddress(data?.address)
            }
        } catch(e){
            console.error("addAddressData_Error",e)
        }
    }

    const removeAddressData = async(addressID) => {
        try{
            const {status, data} = await removeAddressService(addressID, token);
            if ( status ===200){
                setAddress(data?.address)
            }
        } catch(e){
            console.error(e)
        }
    }

    const editAddress = async (addressInput, addressID) => {
        try{
            const {status, data} = await editAddressService(addressInput, addressID, token)

            if(status ===201){
                setAddress(data?.address)
            }
        } catch(e){
            console.error(e)
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
        address,
        checkout,
        setCheckout,
        isAddressFormVisible,
        setIsAddressFormVisible,
        isEdit,
        setIsEdit,
        }}>{children}</AddressContext.Provider>)
}

export const useAddressContext = () => useContext(AddressContext);