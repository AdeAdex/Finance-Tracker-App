// /app/components/MiddleButton.tsx

import React from 'react';
import { TouchableOpacity, View, StyleSheet, ViewStyle } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from "@/context/ThemeProvider";
import { Colors } from "@/constants/Colors";

interface MiddleButtonProps {
  onPress: () => void; // Callback prop for handling button press
  style?: ViewStyle; // Optional style prop
}

export function MiddleButton({ onPress, style }: MiddleButtonProps) {
  const { theme } = useTheme();
  const colors = Colors[theme];
  return (
    <TouchableOpacity style={[styles.middleButtonContainer, style]} onPress={onPress}>
      <View style={[styles.middleButton, {backgroundColor: colors.tabIconSelected}]}>
        <Ionicons name="add" size={32} color="white" />
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
    width: 50,
    height: 50,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white", // Ensure visibility
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});
