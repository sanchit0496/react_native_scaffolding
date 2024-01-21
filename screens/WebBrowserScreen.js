import React from 'react'
import { View, Button, StyleSheet, Pressable, Text } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { useNavigation } from '@react-navigation/native'

const WebBrowserScreen = () => {
  // Function to open a URL
  const navigation = useNavigation()

  const openWebPage = async () => {
    await WebBrowser.openBrowserAsync('https://www.google.com')
  }

  const navigateProfile = () => {
    navigation.replace('Profile')
  }

  return (
    <View style={styles.container}>
      <Button title="Open Web Page On Your Device" onPress={openWebPage} />
      <Pressable onPress={navigateProfile}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            color: '#003F5C',
            padding: 25,
          }}
        >
          Go To Profile
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
  },
})

export default WebBrowserScreen
