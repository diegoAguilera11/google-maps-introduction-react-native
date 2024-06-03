import { useState } from "react";



const AddressViewModel = () => {

    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);



    const saveAddress = () => {

        console.log("LAT: ", lat, " LNG: ", lng);
    }


    return {
        saveAddress,
        setLat,
        setLng
    }
}

export default AddressViewModel;