import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PickUpScreen from './screens/PickUpScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/OrderScreen';
import CameraScreen from './screens/CameraScreen';
import ImagePickerScreen from './screens/ImagePickerScreen';
import SensorScreen from './screens/SensorScreen';
import FileSystemScreen from './screens/FileSystemScreen';
import AudioVideoScreen from './screens/AudioVideoScreen';
import WebBrowserScreen from './screens/WebBrowserScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="PickUp" component={PickUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Order" component={OrderScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Camera" component={CameraScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ImagePicker" component={ImagePickerScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SensorScreen" component={SensorScreen} options={{headerShown:false}}/>
        <Stack.Screen name="FileSystemScreen" component={FileSystemScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AudioVideoScreen" component={AudioVideoScreen} options={{headerShown:false}}/>
        <Stack.Screen name="WebBrowserScreen" component={WebBrowserScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator