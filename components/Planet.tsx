
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PlanetProps {
  name: string;
  days: number;
  hasWarning: boolean;
}

export default function Planet({ name, days, hasWarning }: PlanetProps) {
  return (
    <View style={styles.planet}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.days}>{days} days</Text>
      {hasWarning && <Text style={styles.warning}>!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  planet: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#00F5D4',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderWidth: 4,
    borderColor: '#00F5D4',
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#0A0A0A',
  },
  days: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#0A0A0A',
  },
  warning: {
    position: 'absolute',
    top: 0,
    right: 0,
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#FF004D',
  },
});
