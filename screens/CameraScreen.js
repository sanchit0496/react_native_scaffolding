import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Camera } from 'expo-camera'

const CameraScreen = () => {
  const navigation = useNavigation()
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const cameraRef = useRef(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync()
      console.log(photo)
    }
  }

  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    )
  }

  const navigateProfile = () => {
    navigation.replace('Profile')
  }

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Pressable onPress={takePicture}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              Take Picture
            </Text>
          </Pressable>
          <Pressable onPress={toggleCameraType}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              Flip Camera
            </Text>
          </Pressable>
          <Pressable onPress={navigateProfile}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              Go To Profile
            </Text>
          </Pressable>
        </View>
      </Camera>
    </View>
  )
}

export default CameraScreen
