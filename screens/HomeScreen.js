import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import * as Location from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import DressItem from '../components/DressItem'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart)
  const [items, setItems] = useState([])
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0)
  const navigation = useNavigation()

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState('Location')
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false)

  useEffect(() => {
    checkLocationStatusAndFetch()
  }, [])

  const checkLocationStatusAndFetch = async () => {
    let enabled = await Location.hasServicesEnabledAsync()
    setLocationServicesEnabled(enabled)

    if (!enabled) {
      Alert.alert(
        'Location services not enabled',
        'Please enable the location services',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      )
    } else {
      fetchCurrentLocation()
    }
  }

  const fetchCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      Alert.alert(
        'Permission denied',
        'Allow the app to use the location services',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      )
    } else {
      try {
        const { coords } = await Location.getCurrentPositionAsync()

        if (coords) {
          const { latitude, longitude } = coords

          let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude,
          })

          if (response && response.length > 0) {
            const item = response[0]
            const address = `${item.name} ${item.city} ${item.postalCode}`
            setDisplayCurrentAddress(address)
          }
        }
      } catch (error) {
        console.error('Error fetching current location:', error)
      }
    }
  }

  const dispatch = useDispatch()

  const product = useSelector((state) => state.product.product)

  const [filteredProducts, setFilteredProducts] = useState([...product])

  const handleSearch = (text) => {
    const searchTerm = text.toLowerCase()
    const filtered = product.filter((item) =>
      item.name.toLowerCase().includes(searchTerm),
    )
    setFilteredProducts(filtered)
  }

  useEffect(() => {
    setFilteredProducts([...product])
  }, [product])

  return (
    <>
      <ScrollView
        style={{ backgroundColor: '#F0F0F0', flex: 1, marginTop: 50 }}
      >
        {/* Location and Profile */}
        <View
          style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
        >
          <MaterialIcons name="location-on" size={30} color="#fd5c63" />
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>

          <Pressable
            onPress={() => navigation.navigate('Profile')}
            style={{ marginLeft: 'auto', marginRight: 7 }}
          >
            <Image
              style={{ width: 40, height: 40, borderRadius: 20 }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png',
              }}
            />
          </Pressable>
        </View>

        {/* Image Carousel */}
        <Carousel />

        {/* Services Component */}
        <Services />

        {/* Search Bar */}
        <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 0.8,
            borderColor: '#C0C0C0',
            borderRadius: 7,
          }}
        >
          <TextInput
            placeholder="Filter For Items"
            onChangeText={handleSearch}
          />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>

        {/* Render all the Products */}
        {filteredProducts.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}
      </ScrollView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: '#003F5C',
            padding: 10,
            marginBottom: 40,
            margin: 15,
            borderRadius: 7,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>
              {cart.length} items | ₹ {total}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: 'white',
                marginVertical: 6,
              }}
            >
              + Delivery Charges
            </Text>
          </View>

          <Pressable onPress={() => navigation.navigate('PickUp')}>
            <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>
              Proceed
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
