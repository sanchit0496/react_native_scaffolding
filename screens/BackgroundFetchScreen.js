import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import * as BackgroundFetch from 'expo-background-fetch'
import * as TaskManager from 'expo-task-manager'
import { useNavigation } from '@react-navigation/native'

const BACKGROUND_FETCH_TASK = 'background-fetch'

// Define the task
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    // Perform the task, e.g., network request, etc.
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log('Background Fetch data:', data)
    return BackgroundFetch.BackgroundFetchResult.NewData
  } catch (error) {
    console.error(error)
    return BackgroundFetch.BackgroundFetchResult.Failed
  }
})

const BackgroundFetchScreen = () => {
  const navigation = useNavigation()
  const [status, setStatus] = useState('Background fetch is not enabled')

  useEffect(() => {
    const initBackgroundFetch = async () => {
      try {
        const status = await BackgroundFetch.getStatusAsync()
        console.log('status', status)
        switch (status) {
          case BackgroundFetch.Status.Restricted:
          case BackgroundFetch.Status.Denied:
            console.log('Background Fetch is disabled')
            break
          default: {
            await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
              minimumInterval: 60, // The task runs every 60 seconds
            })
            console.log('Background Fetch task registered')
            setStatus('Background Fetch task registered')
          }
        }
      } catch (error) {
        console.error('Error registering background Fetch task:', error)
      }
    }

    initBackgroundFetch()
  }, [])

  const navigateProfile = () => {
    navigation.replace('Profile')
  }

  return (
    <View style={styles.container}>
      <Text>{status}</Text>
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
})

export default BackgroundFetchScreen
