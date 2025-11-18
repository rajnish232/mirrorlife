
import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MirrorSelfForge from './screens/MirrorSelfForge';
import Nexus from './screens/Nexus';
import { GestureHandlerRootView, PinchGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import * as Linking from 'expo-linking';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

function SplashScreenComponent({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  });

  const scale = useSharedValue(1);
  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale;
    },
    onEnd: () => {
      scale.value = withSpring(1);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <Animated.View style={[styles.container, animatedStyle]} onLayout={onLayoutRootView}>
          <Text style={styles.text}>Your life has 2,847,392 possible paths. Let's find the best ones.</Text>
          <Button title="Forge Your MirrorSelf" onPress={() => navigation.navigate('MirrorSelfForge')} />
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
}


export default function App() {
  const url = Linking.useURL();
  console.log('App URL:', url);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreenComponent} />
        <Stack.Screen name="MirrorSelfForge" component={MirrorSelfForge} />
        <Stack.Screen name="Nexus" component={Nexus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#00F5D4',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
