import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import inputStyles from './InputStyles';
import useViewModel from './ViewModel';

export const FormScreen = () => {

    const { setLat, setLng, saveAddress } = useViewModel();

    return (
        <View style={styles.container}>
            <Text>Formulario Dirección</Text>

            <GooglePlacesAutocomplete
                placeholder='Busca tu dirección de entrega'
                styles={inputStyles}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
                    language: 'es'
                }}
                debounce={300}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    //console.log("DATA: ", data);
                    //console.log("DETAILS: ", details.geometry?.location);
                    setLat(details.geometry?.location.lat);
                    setLng(details.geometry?.location.lng);
                }}
            />

            <Button
                title="Guardar"
                onPress={saveAddress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
    }
});