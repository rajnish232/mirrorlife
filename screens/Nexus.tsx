
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Planet from '../components/Planet';

export default function Nexus() {
  return (
    <View style={styles.container}>
      <View style={styles.particleField} />
      <View style={styles.centralOrb}>
        <Text style={styles.orbText}>MirrorSelf</Text>
      </View>
      <View style={styles.orbit}>
        <Planet name="Simulation 1" days={127} hasWarning={false} />
        <Planet name="Simulation 2" days={412} hasWarning={true} />
        <Planet name="Simulation 3" days={847} hasWarning={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  particleField: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent', // Placeholder for particle animation
  },
  centralOrb: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#00F5D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orbText: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#0A0A0A',
  },
  orbit: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
