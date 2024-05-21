import { Image, StyleSheet, Button, View } from 'react-native';
import { useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack, Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';


export default function SearchScreen() {
  const [image, setImage] = useState('');
  const [isSearchEnabled, setSearchEnabled] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setSearchEnabled(true)
      // TODO: submit an API request to a Django backend. 
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#ffffff', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/splash.png')}
            style={styles.logo}
          />
        }>
        <ThemedView style={styles.container}>  
          <ThemedText type="title">Pick an image of a building from your camera roll</ThemedText>
        </ThemedView>
        <View style={styles.container}>
          <Button title="open camera roll" onPress={pickImage} />
        </View>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <View style={styles.container}>
          <Link href={"building_info"}>
            <Button title="Search" disabled={!isSearchEnabled}/>
          </Link>
        </View>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  image: {
    width: 200, 
    height: 200
  }, 
});
