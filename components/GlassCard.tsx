
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface GlassCardProps {
  title: string;
  data: string;
}

export default function GlassCard({ title, data }: GlassCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 2,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#00F5D4',
  },
  data: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
