import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const Particle = ({ style }) => {
  return <Animated.View entering={FadeIn.delay(500 + Math.random() * 500).duration(1000)} style={[styles.pixel, style]} />;
};

const styles = StyleSheet.create({
  pixel: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: '#00F5D4',
  },
});

export default Particle;
