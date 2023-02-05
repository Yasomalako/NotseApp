import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function Map() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== ' granted') {
      setErrorMsg('Permission to access location was denied');
    } else {
      let location = await Location.getCurrentPositionAsync()
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: location.coords.latitudeDelta ,
        longitudeDelta: location.coords.longitudeDelta,
      });
      console.log(location.coords.latitude, location.coords.longitude);
    }
  }

  useEffect(() => {
    userLocation();
  }, []);



  return (

    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={mapRegion} >

        <Marker coordinate={mapRegion} title='marker' />

      </MapView>
      <Button title='get location' onPress={userLocation} />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },

});