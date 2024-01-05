import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { cleanCart, decrementQuantity, incrementQuantity } from '../CartReducer'
import { decrementQty, incrementQty } from '../ProductReducer'

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart)
  const route = useRoute()
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const placeOrder = async () => {
    navigation.navigate('Order')
  }

  const deliveryCharges = Math.floor(Math.random() * 80) + 1

  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        {total === 0 ? (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginTop: 40 }}>Your cart is empty</Text>
          </View>
        ) : (
          <>
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Ionicons
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={24}
                color="black"
              />
            </View>

            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 5,
                color: '#003F5C',
                marginLeft: 8,
                marginBottom: 15,
              }}
            >
              Your Bucket
            </Text>

            <Pressable
              style={{
                backgroundColor: 'white',
                borderRadius: 12,
                marginLeft: 10,
                marginRight: 10,
                padding: 14,
              }}
            >
              {cart.map((item, index) => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 12,
                  }}
                  key={index}
                >
                  <Text
                    style={{
                      width: 100,
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#003F5C',
                    }}
                  >
                    {item.name}
                  </Text>

                  {/* - + button */}
                  <Pressable
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      alignItems: 'center',
                      borderColor: '#003F5C',
                      borderWidth: 0.5,
                      borderRadius: 10,
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        dispatch(decrementQuantity(item)) // cart
                        dispatch(decrementQty(item)) // product
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#003F5C',
                          paddingHorizontal: 6,
                          fontWeight: '600',
                        }}
                      >
                        -
                      </Text>
                    </Pressable>

                    <Pressable>
                      <Text
                        style={{
                          fontSize: 19,
                          color: '#003F5C',
                          paddingHorizontal: 8,
                          fontWeight: '600',
                        }}
                      >
                        {item.quantity}
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        dispatch(incrementQuantity(item)) // cart
                        dispatch(incrementQty(item)) //product
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#003F5C',
                          paddingHorizontal: 6,
                          fontWeight: '600',
                        }}
                      >
                        +
                      </Text>
                    </Pressable>
                  </Pressable>

                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#003F5C',
                    }}
                  >
                    ₹{item.price * item.quantity}
                  </Text>
                </View>
              ))}
            </Pressable>

            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginTop: 30,
                  color: '#003F5C',
                }}
              >
                Billing Details
              </Text>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 7,
                  padding: 10,
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: '400', color: 'gray' }}
                  >
                    Item Total
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: '#003F5C',
                    }}
                  >
                    ₹{total}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 8,
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: '400', color: 'gray' }}
                  >
                    Delivery Charges
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: '#003F5C',
                    }}
                  >
                    ₹{deliveryCharges}
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: 'gray',
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                  }}
                ></View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ fontSize: 16, color: 'gray' }}>Days</Text>

                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: '#003F5C',
                    }}
                  >
                    {route.params.no_Of_days}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ fontSize: 16, color: 'gray' }}>Pick Up</Text>

                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: '#003F5C',
                    }}
                  >
                    {route.params.selectedTime}
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: 'gray',
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#003F5C',
                    }}
                  >
                    To Pay
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#003F5C',
                    }}
                  >
                    ₹{total + deliveryCharges}
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: '#003F5C',
            marginTop: 'auto',
            padding: 20,
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
              {cart.length} Items | ₹{total + deliveryCharges}
            </Text>
          </View>

          <Pressable onPress={placeOrder}>
            <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>
              Place Order
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({})
