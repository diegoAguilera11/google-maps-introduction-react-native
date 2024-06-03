import { useEffect, useRef, useState } from "react";

import * as Location from "expo-location";
import MapView, { Camera } from "react-native-maps";

const MapViewModel = () => {

    // Manejar los permisos de ubicación
    const [messagePermissions, setMessagePermissions] = useState('');

    // Punto de referencia
    const [refPoint, setRefPoint] = useState({
        name: '',
        latitude: 0,
        longitude: 0
    });

    // Posición actual del usuario mediante Expo Location
    const [position, setPosition] = useState<Location.LocationObjectCoords>();

    // Referencia al mapa
    const mapRef = useRef<MapView | null>();


    useEffect(() => {
        requesttPermissions();
    }, []);

    const requesttPermissions = async () => {
        let response = await Location.requestForegroundPermissionsAsync();
        console.log(response);

        if (response.status !== 'granted') {
            setMessagePermissions('Es necesario aceptar los permisos de ubicación');

            // Navegar hacia la pantalla anterior (formulario de direccion).
            return;
        }

        await startForegroundUbicationUser();
    }


    const startForegroundUbicationUser = async () => {
        const location = await Location.getLastKnownPositionAsync();
        console.log(location);
        setPosition(location?.coords);

        // Mover el mapa a la posición actual del usuario

        const newCamera: Camera ={
            center: {
                latitude: location?.coords.latitude || -23.6485922,
                longitude: location?.coords.longitude || -70.3966165
            },
            zoom: 15,
            heading: 0,
            pitch: 0,
            altitude: 0
        };

        mapRef?.current?.animateCamera(newCamera, { duration: 3000 });
    }


    return {
        mapRef
    }
}

export default MapViewModel;