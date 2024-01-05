import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { useNavigation } from '@react-navigation/native'

const SensorScreen = () => {
    const navigation = useNavigation()

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    });

    Accelerometer.setUpdateInterval(1000);

    return () => {
      Accelerometer.removeAllListeners();
    };
  }, []);

  const navigateProfile = () => {
    navigation.replace('Profile')    
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C', padding: 25, fontWeight: 'bold' }}>Accelerometer:</Text>
      <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C' }}>x: {data.x.toFixed(2)}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C' }}>y: {data.y.toFixed(2)}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C' }}>z: {data.z.toFixed(2)}</Text>

      <Pressable onPress={navigateProfile}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C', padding: 25 }}>Go To Profile</Text>
        </Pressable>

    </View>
  );
}

export default SensorScreen