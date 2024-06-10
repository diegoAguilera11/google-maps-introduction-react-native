import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

import { GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface GoogleInputProps {
    updateCoordinates: (lat: number, lng: number, nameAddress: string) => void;
}

export const GoogleInput = ({ updateCoordinates }: GoogleInputProps) => {
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Busca tu dirección de entrega'
                styles={styles}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
                    language: 'es'
                }}
                debounce={300}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    updateCoordinates(details.geometry?.location.lat, details.geometry?.location.lng, data.description);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:  1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 50,
    },
    textInput: {
        backgroundColor: "#bebdbc",
        fontSize: 15,
        marginHorizontal: 20,
    },
    textInputContainer: {

    }
});