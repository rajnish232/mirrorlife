import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, FadeIn } from 'react-native-reanimated';

import Particle from '../components/Particle';

const SplashScreen = () => {
  const [showText, setShowText] = useState(false);
  const pixelScale = useSharedValue(1);
  const pixelOpacity = useSharedValue(1);
  const constellationOpacity = useSharedValue(0);
  const { width, height } = Dimensions.get('window');

  useEffect(() => {
    pixelScale.value = withTiming(10, { duration: 500, easing: Easing.inOut(Easing.ease) });
    pixelOpacity.value = withTiming(0, { duration: 500, easing: Easing.inOut(Easing.ease) });
    constellationOpacity.value = withTiming(1, { duration: 1000, delay: 500 });
    setTimeout(() => setShowText(true), 2000);
  }, [pixelScale, pixelOpacity, constellationOpacity]);

  const animatedPixelStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: pixelScale.value }],
      opacity: pixelOpacity.value,
    };
  });

  const animatedConstellationStyle = useAnimatedStyle(() => {
    return {
      opacity: constellationOpacity.value,
    };
  });

  const particles = Array.from({ length: 100 }).map((_, i) => (
    <Particle
      key={i}
      style={{
        top: Math.random() * height,
        left: Math.random() * width,
      }}
    />
  ));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.pixel, animatedPixelStyle]} />
      <Animated.View style={[styles.constellation, animatedConstellationStyle]}>{particles}</Animated.View>
      {showText && (
        <Animated.Text entering={FadeIn.duration(1000)} style={styles.text}>
          Your life has 2,847,392 possible paths. Let&rsquo;s find the best ones.
        </Animated.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pixel: {
    width: 2,
    height: 2,
    backgroundColor: '#00F5D4',
  },
  constellation: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: 'Inter-Regular',
  },
});

export default SplashScreen;
