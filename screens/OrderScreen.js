import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

const OrderScreen = () => {
  const navigation = useNavigation()

  const onTrackOrder = () => {
    console.log('clicked')
    navigation.navigate('Profile')
  }
  return (
    <SafeAreaView>
      <LottieView
        source={require('../assets/thumbs.json')}
        style={{
          height: 360,
          width: 300,
          alignSelf: 'center',
          marginTop: 40,
          justifyContent: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Text
        style={{
          marginTop: 40,
          fontSize: 19,
          fontWeight: '600',
          textAlign: 'center',
          color: '#800000',
        }}
      >
        Order Placed!
      </Text>

      <Pressable
        onPress={onTrackOrder}
        style={{
          width: 200,
          backgroundColor: 'transparent',
          padding: 15,
          borderRadius: 7,
          marginTop: 50,
          marginLeft: 'auto',
          marginRight: 'auto',
          borderBottomColor: '#003F5C',
          borderBottomWidth: 2,
        }}
      >
        <Text
          style={{
            color: '#003F5C',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
          }}
        >
          Track Order
        </Text>
      </Pressable>

      <LottieView
        source={require('../assets/sparkle.json')}
        style={{
          height: 300,
          position: 'absolute',
          top: 100,
          width: 300,
          alignSelf: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </SafeAreaView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})
