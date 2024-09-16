//  /components/AppButton.tsx

import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface AppButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>; 
  buttonTextStyle?: StyleProp<TextStyle>;
}

export const AppButton: React.FC<AppButtonProps> = ({ onPress, title, buttonStyle, buttonTextStyle }) => {
  return (
    <TouchableOpacity style={[styles.Button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#3D51FF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
