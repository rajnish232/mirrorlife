
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import GlassCard from '../components/GlassCard';

export default function MirrorSelfForge({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>3D Avatar</Text>
      </View>
      <View style={styles.cardsContainer}>
        <GlassCard title="Work Calendar" data="Last 90 days" />
        <GlassCard title="Spending Pattern" data="Spiral chart" />
        <GlassCard title="Health Data" data="Steps, sleep, HRV" />
        <GlassCard title="Social Graph" data="Contacts, messages" />
      </View>
      <Button title="Enter the Nexus" onPress={() => navigation.navigate('Nexus')} />
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
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#00F5D4',
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
