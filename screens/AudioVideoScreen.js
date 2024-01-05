import React, { useState, useRef } from 'react';
import { View, Button, StyleSheet, Pressable, Text } from 'react-native';
import { Video } from 'expo-av';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const AudioVideo = () => {
    const navigation = useNavigation()
  const videoRef = useRef(null);
  const [audio, setAudio] = useState(null);

  // Function to load and play video
  const playVideo = async () => {
    await videoRef.current.loadAsync(
      { uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
      {},
      true
    );
  };

  // Function to load and play audio
  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3' }
    );
    setAudio(sound);
    await sound.playAsync();
  };

  // Function to stop the audio
  const stopAudio = async () => {
    if (audio) {
      await audio.stopAsync();
      await audio.unloadAsync();
      setAudio(null);
    }
  };

  const navigateProfile = () => {
    navigation.replace('Profile')    
  }

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
      />

      <View style={styles.buttonContainer}>
        <Button title="Play Video" onPress={playVideo} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Play Audio" onPress={playAudio} />
        <Button title="Stop Audio" onPress={stopAudio} />
      </View>
         <Pressable onPress={navigateProfile}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C', padding: 25 }}>Go To Profile</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 300,
  },
  buttonContainer: {
    marginVertical: 10,
  }
});

export default AudioVideo;
