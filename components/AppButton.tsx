//  /components/AppButton.tsx


import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { ThemedText } from '@/components/ThemedText'; // Import ThemedText component

interface AppButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>; 
  buttonTextStyle?: StyleProp<TextStyle>;
}

export const AppButton: React.FC<AppButtonProps> = ({ onPress, title, buttonStyle, buttonTextStyle }) => {
  // Use theme color for button background
  
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <ThemedText style={[styles.buttonText, buttonTextStyle]}>{title}</ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
    backgroundColor: "#3D51FF",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: 'white'
  },
});
