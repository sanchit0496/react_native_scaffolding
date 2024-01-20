import React, { useState } from 'react'
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native'

const SecureStoreScreen = () => {
  const [inputValue, setInputValue] = useState('')
  const [storedValue, setStoredValue] = useState('')
  const navigation = useNavigation()

  // Function to save the value
  const saveValue = async () => {
    await SecureStore.setItemAsync('myKey', inputValue)
    alert('Value stored successfully!')
  }

  // Function to retrieve the value
  const getValue = async () => {
    let result = await SecureStore.getItemAsync('myKey')
    if (result) {
      setStoredValue(result)
    } else {
      alert('No values stored under that key.')
    }
  }

  const navigateProfile = () => {
    navigation.replace('Profile')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder="Enter something to store securely"
      />
      <Button title="Save to Secure Store" onPress={saveValue} />
      <Button title="Retrieve from Secure Store" onPress={getValue} />
      {storedValue ? <Text>Stored Value: {storedValue}</Text> : null}
      <Pressable onPress={navigateProfile}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            color: '#003F5C',
            padding: 25,
          }}
        >
          Visit Profile
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default SecureStoreScreen
