import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  ImageBackground,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { format, parse } from 'date-fns'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(null)
  const [dateOfBirth, setDateOfBirth] = useState('')

  const navigation = useNavigation()

  const handleAccountCreated = () => {
    navigation.navigate('Login')
  }

  const register = () => {
    if (email === '' || password === '' || phone === '') {
      Alert.alert(
        'Invalid Details',
        'Please fill all the details',
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
      const formattedDate = format(
        parse(dateOfBirth, 'MM/dd/yyyy', new Date()),
        'MMMM do, yyyy',
      )
      console.log('Formatted Date of Birth:', formattedDate)

      Alert.alert(
        'Account Created!',
        '',
        [{ text: 'Login', onPress: () => handleAccountCreated() }],
        { cancelable: false },
      )
    }
  }

  const image = require('../assets/login.png')

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView
          style={{
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 15,
            paddingBottom: 20,
            opacity: 0.8,
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <Text
              style={{ fontSize: 20, color: '#003F5C', fontWeight: 'bold' }}
            >
              Sign Up
            </Text>
          </View>

          <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="black"
              />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor="black"
                style={{
                  fontSize: email ? 18 : 18,
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  marginLeft: 13,
                  width: 300,
                  marginVertical: 10,
                }}
              />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="key-outline" size={24} color="black" />
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="black"
                style={{
                  fontSize: password ? 18 : 18,
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  marginLeft: 13,
                  width: 300,
                  marginVertical: 20,
                }}
              />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons name="cake" size={24} color="black" />
              <TextInput
                value={dateOfBirth}
                onChangeText={(text) => setDateOfBirth(text)}
                placeholder="Date of Birth (MM/DD/YYYY)"
                placeholderTextColor="black"
                style={{
                  fontSize: 18,
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  marginLeft: 13,
                  width: 300,
                  marginVertical: 10,
                }}
              />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="phone" size={24} color="black" />
              <TextInput
                value={phone}
                onChangeText={(text) => setPhone(text)}
                placeholder="Phone No"
                placeholderTextColor="black"
                style={{
                  fontSize: password ? 18 : 18,
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  marginLeft: 13,
                  width: 300,
                  marginVertical: 10,
                }}
              />
            </View>

            {error && (
              <Text
                style={{
                  color: 'red',
                  fontSize: 16,
                  textAlign: 'center',
                  marginBottom: -20,
                  marginTop: 20,
                }}
              >
                {error}
              </Text>
            )}

            <Pressable
              onPress={register}
              style={{
                width: 200,
                backgroundColor: '#003F5C',
                padding: 15,
                borderRadius: 7,
                marginTop: 50,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Text
                style={{ fontSize: 18, textAlign: 'center', color: 'white' }}
              >
                Register
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginTop: 20 }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 17,
                  color: 'gray',
                  fontWeight: '500',
                }}
              >
                Sign In To Existing Account
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})
