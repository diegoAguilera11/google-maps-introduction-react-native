import { useState } from "react";



const AddressViewModel = () => {

    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    const [address, setAddress] = useState<string>('');



    const changeAddressInformation = (lat: number, lng: number, address: string) => {

        setLat(lat);
        setLng(lng);
        setAddress(address);
    }


    const saveAddress = () => {

        console.log("LAT: ", lat, " LNG: ", lng);
    }


    return {
        saveAddress,
        setLat,
        setLng,
        address,
        setAddress,
        changeAddressInformation
    }
}

export default AddressViewModel;