import { Image, StyleSheet, Button, View } from 'react-native';
import { useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';


export default function SearchScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Building Information' }} />
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#ffffff', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/splash.png')}
            style={styles.logo}
          />
        }>
        <ThemedView style={styles.container}>  
          <ThemedText type="title">Building Name: Rainer Tower</ThemedText>
        </ThemedView>
        <ThemedView style={styles.container}>  
          <ThemedText type="title">Architect(s): Minoru Yamasaki, NBBJ</ThemedText>
        </ThemedView>
        <ThemedView style={styles.container}>  
          <ThemedText type="title">Year of completion: 1977</ThemedText>
        </ThemedView>
        <ThemedView style={styles.container}>  
          <ThemedText type="title">Images: TBD</ThemedText>
        </ThemedView>
        <ThemedView style={styles.container}>  
          <ThemedText type="title">If you believe this information is incorrect, please help us correct it by emailing xyz@gmail.com</ThemedText>
        </ThemedView>
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
  }
});
