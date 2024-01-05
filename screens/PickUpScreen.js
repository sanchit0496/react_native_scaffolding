import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native'
import React, { useState } from 'react'
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const cart = useSelector((state) => state.cart.cart)
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0)
  const [selectedTime, setSelectedTime] = useState([])
  const [delivery, setDelivery] = useState([])

  // Calculate the dates
  const today = new Date()
  const endDate = new Date()
  endDate.setDate(today.getDate() + 14) // Two weeks from today
  const initialSelectedDate = new Date()
  initialSelectedDate.setDate(today.getDate() + 4) // Four days from today

  const deliveryTime = [
    {
      id: '0',
      name: '15 Days',
    },
    {
      id: '1',
      name: '30 Days',
    },
    {
      id: '2',
      name: '45 Days',
    },
    {
      id: '3',
      name: '60 Days',
    },
    {
      id: '4',
      name: 'Not Required',
    },
  ]

  const times = [
    {
      id: '0',
      time: '11:00 PM',
    },
    {
      id: '1',
      time: '12:00 PM',
    },
    {
      id: '2',
      time: '1:00 PM',
    },
    {
      id: '2',
      time: '2:00 PM',
    },
    {
      id: '4',
      time: '3:00 PM',
    },
    {
      id: '5',
      time: '4:00 PM',
    },
  ]
  const navigation = useNavigation()
  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !delivery) {
      Alert.alert(
        'Empty or invalid',
        'Please select all the fields',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      )
    }
    if (selectedDate && selectedTime && delivery) {
      navigation.replace('Cart', {
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        no_Of_days: delivery,
      })
    }
  }

  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            marginHorizontal: 10,
            marginTop: 45,
          }}
        >
          Enter Service Address
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: 'gray',
            borderWidth: 0.7,
            paddingVertical: 40,
            borderRadius: 9,
            margin: 10,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            marginHorizontal: 10,
            marginTop: 40,
          }}
        >
          Select Service Date
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={today}
          endDate={endDate}
          initialSelectedDate={initialSelectedDate}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#003F5C"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />

        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            marginHorizontal: 10,
            marginTop: 40,
          }}
        >
          Select Service Time
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: '#003F5C',
                      borderWidth: 2,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: 'gray',
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            marginHorizontal: 10,
            marginTop: 40,
          }}
        >
          Recurring Service
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, i) => (
            <Pressable
              style={
                delivery.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: '#003F5C',
                      borderWidth: 2,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: 'gray',
                      borderWidth: 0.7,
                    }
              }
              onPress={() => setDelivery(item.name)}
              key={i}
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: '#003F5C',
            marginTop: 'auto',
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
              {cart.length} items | ₹{total}
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

          <Pressable onPress={proceedToCart}>
            <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>
              Proceed
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  )
}

export default PickUpScreen

const styles = StyleSheet.create({})
