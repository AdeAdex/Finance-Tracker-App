// /app/components/MiddleButton.tsx

import React from 'react';
import { TouchableOpacity, View, StyleSheet, ViewStyle } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface MiddleButtonProps {
  onPress: () => void; // Callback prop for handling button press
  style?: ViewStyle; // Optional style prop
}

export function MiddleButton({ onPress, style }: MiddleButtonProps) {
  return (
    <TouchableOpacity style={[styles.middleButtonContainer, style]} onPress={onPress}>
      <View style={styles.middleButton}>
        <Ionicons name="add" size={32} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  middleButtonContainer: {
    position: "absolute",
    bottom: 30, // Adjust as needed
    left: "50%",
    transform: [{ translateX: -32 }], // Center the button horizontally
    alignItems: "center",
    zIndex: 10,
  },
  middleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Ensure visibility
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});
