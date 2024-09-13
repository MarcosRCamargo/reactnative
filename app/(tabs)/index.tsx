import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView >
      <Text className='text-red-500'>Uber Clone</Text>
      <StatusBar  />
    </SafeAreaView>    
  );
}


