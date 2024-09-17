//  /app/tabs/settings.tsx






import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 for icons
import { useTheme } from '@/context/ThemeProvider'; // Import the custom hook for theme context
import { Colors } from '@/constants/Colors'; // Import color definitions
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const SettingsScreen = () => {
  const { theme, setTheme } = useTheme(); // Get theme and toggle function from context

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Define colors based on current theme
  const colors = Colors[theme];

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemedText type="title" style={{ color: colors.text }}>Settings</ThemedText>
      
      <TouchableOpacity onPress={toggleTheme} style={[styles.themeToggle, { backgroundColor: colors.background }]}>
        {/* Change icon based on the current theme */}
        <FontAwesome5
          name={theme === 'light' ? 'moon' : 'sun'}
          size={24}
          color={colors.icon} // Use the icon color from the current theme
        />
        <ThemedText type="default" style={[styles.toggleText, { color: colors.text }]}>
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </ThemedText>
      </TouchableOpacity>

      {/* Add more settings options here */}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Optional padding
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  toggleText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default SettingsScreen;
