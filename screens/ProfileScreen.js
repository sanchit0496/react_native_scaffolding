import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { cleanCart } from '../CartReducer'

const ProfileScreen = () => {
  const navigation = useNavigation()

  const cart = useSelector((state) => state.cart.cart)
  console.log('cart', cart)

  const signOutUser = () => {
    navigation.replace('Login')
    dispatch(cleanCart())
  }

  const navigateCamera = () => {
    navigation.replace('Camera')    
  }
 
  const navigateImagePicker = () => {
    navigation.replace('ImagePicker')    
  }
 
  const onPressHome = () => {
    console.log('onPressHome')
    navigation.navigate('Home')
  }

  
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <View style={styles.topBar}>
          <Pressable style={{ marginRight: 10 }} onPress={onPressHome}>
            <Text style={styles.text}>Home</Text>
          </Pressable>

          <Pressable onPress={signOutUser}>
            <Text style={styles.text}>Sign Out</Text>
          </Pressable>
        </View>

        <View>
          <Pressable onPress={navigateCamera}>
            <Text style={styles.cameraAccess}>Camera Access</Text>
          </Pressable>
        </View>

        <View>
          <Pressable onPress={navigateImagePicker}>
            <Text style={styles.cameraAccess}>Image Picker</Text>
          </Pressable>
        </View>

        <Text style={styles.yourOrder}>Your Orders</Text>

        <ScrollView>
          <View>
            {cart.map((item, index) => (
              <View key={index} style={styles.container}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Item:</Text>
                    <Text style={styles.regularText}>{item.name}</Text>
                  </View>

                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Price:</Text>
                    <Text style={styles.regularText}>{item.price}</Text>
                  </View>

                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Quantity:</Text>
                    <Text style={styles.regularText}>{item.quantity}</Text>
                  </View>

                  {/* Removed the pickUpDetails section as it's not in the cart data */}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#003F5C',
  },
  regularText: {
    marginLeft: 'auto',
    color: '#003F5C',
    marginLeft: 80,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 25,
  },
  text: {
    fontWeight: 'bold',
    color: '#003F5C',
  },
  yourOrder: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 25,
    color: '#003F5C',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cameraAccess: {
    fontSize: 18,
    color: '#003F5C',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10
  }
})
