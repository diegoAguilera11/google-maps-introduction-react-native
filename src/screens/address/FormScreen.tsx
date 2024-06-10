import React from 'react'
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native'

import { GoogleInput } from '../../components/GoogleInput';

import useViewModel from './ViewModel';
import { RoundedButton } from '../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/MainAppStack';


interface Props extends StackScreenProps<RootStackParams, 'FormScreen'> { };

export const FormScreen = ({ navigation, route }: Props) => {

    const { address, changeAddressInformation } = useViewModel();


    const updateCoordinates = (lat: number, lng: number, address: string) => {
        changeAddressInformation(lat, lng, address);
    }

    return (
        <View style={styles.container}>

            <View style={styles.formInput}>
                <Image
                    style={styles.formIcon}
                    source={require('../../../assets/map.png')}
                />
                <Text
                    style={styles.formTextInput}
                >
                    {address}
                </Text>
            </View>

            <GoogleInput
                updateCoordinates={updateCoordinates}
            />

            <RoundedButton
                text={'Seleccionar en el mapa'}
                onPress={() => navigation.navigate('MapScreen')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#EBEBEB',
        marginLeft: 15
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 20,
    },
    formIcon: {
        width: 30,
        height: 30,
        marginTop: 10
    },
});