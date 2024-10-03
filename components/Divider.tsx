//  /components/Divider.tsx

import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "@/context/ThemeProvider"; // Import the custom hook for theme context
import { Colors } from "@/constants/Colors"; // Import the color definitions

interface DividerProps {
  dividerStyle?: ViewStyle; // Accept an optional style prop
}

const Divider: React.FC<DividerProps> = ({ dividerStyle }) => {
  const { theme } = useTheme(); // Get the current theme
  const colors = Colors[theme]; // Access theme colors

  return <View style={[styles.divider, { borderTopColor: colors.border }, dividerStyle,]} />;
};

const styles = StyleSheet.create({
  divider: {
    width: "50%",
    borderTopWidth: 4,
    marginVertical: 20, // Equivalent to 'my-4'
    marginHorizontal: "auto",
    marginTop: "auto",
  },
});

export default Divider;
