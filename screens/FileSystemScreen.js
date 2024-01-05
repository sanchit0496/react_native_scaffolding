import React, { useState } from 'react'
import { View, Text, Button, Pressable } from 'react-native'
import * as FileSystem from 'expo-file-system'
import { useNavigation } from '@react-navigation/native'

const FileSystemScreen = () => {
  const [fileContent, setFileContent] = useState('')
  const navigation = useNavigation()

  // Path to a file in the document directory
  const fileUri = FileSystem.documentDirectory + 'sample.txt'

  // Function to write to a file
  const writeFile = async () => {
    await FileSystem.writeAsStringAsync(fileUri, 'Hello World!')
    alert('File written successfully!')
  }

  // Function to read from a file
  const readFile = async () => {
    let content = await FileSystem.readAsStringAsync(fileUri)
    setFileContent(content)
  }

  // Function to delete a file
  const deleteFile = async () => {
    await FileSystem.deleteAsync(fileUri)
    alert('File deleted successfully!')
    setFileContent('')
  }

  // Function to download a file
  const downloadFile = async () => {
    const uri =
      'https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt' // Replace with your file URL
    await FileSystem.downloadAsync(uri, fileUri)
    alert('File downloaded successfully!')
  }

  const navigateProfile = () => {
    navigation.replace('Profile')    
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You can download and read the file here</Text>
      <View style={{ marginBottom: 10 }}>
        <Button title="Write to File" onPress={writeFile} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="Read File" onPress={readFile} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="Delete File" onPress={deleteFile} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="Download File" onPress={downloadFile} />
      </View>
      {fileContent ? <Text>File Content: {fileContent}</Text> : null}
      <Pressable onPress={navigateProfile}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C', padding: 25 }}>Go To Profile</Text>
        </Pressable>
    </View>
  )
}

export default FileSystemScreen
