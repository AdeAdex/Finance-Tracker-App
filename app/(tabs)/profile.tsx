// /app/(tabs)/profile.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/context/ThemeProvider';

export default function ProfileScreen() {
  const { theme } = useTheme();
  const colors = Colors[theme]; // Access current theme colors

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.profileContainer}>
        {/* User Avatar */}
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual avatar URL
          style={styles.avatar}
        />

        {/* User Info */}
        <Text style={[styles.name, { color: colors.text }]}>John Doe</Text>
        <Text style={[styles.email, { color: colors.text }]}>johndoe@example.com</Text>

        {/* Edit Profile Button */}
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.text }]}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
//     justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop:50,
    paddingBottom: 100,
  },
  profileContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#6b7280', // Tailwind gray-500 equivalent
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
