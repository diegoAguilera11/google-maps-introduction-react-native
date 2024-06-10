import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import MapView from 'react-native-maps';

import styleMap from './StylesMap';
import useViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/MainAppStack';


interface Props extends StackScreenProps<RootStackParams, 'MapScreen'> { };

export const MapScreen = ({ navigation, route }: Props) => {

  const { mapRef } = useViewModel();


  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={styleMap}
        style={styles.map}
        ref={mapRef}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  locationIcon: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  refPointContainer: {
    backgroundColor: '#cecece',
    borderRadius: 20,
    width: '60%',
    paddingVertical: 8,
    position: 'absolute',
    top: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  refPointText: {
    fontWeight: '500',
    textAlign: 'center'
  },
  buttonRefPoint: {
    position: 'absolute',
    bottom: 30,
    width: '65%'
  }
})