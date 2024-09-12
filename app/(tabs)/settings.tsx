//  /app/tabs/settings.tsx


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 for icons
import { useTheme } from '@/context/ThemeProvider'; // Import the custom hook for theme context

const SettingsScreen = () => {
  const { theme, setTheme } = useTheme(); // Get theme and toggle function from context

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Define colors based on current theme
  const colors = theme === 'light' 
    ? { background: '#F3F4F6', text: '#333' } 
    : { background: '#1D3D47', text: '#fff' };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      
      <TouchableOpacity onPress={toggleTheme} style={[styles.themeToggle, { backgroundColor: colors.background }]}>
        {/* Change icon based on the current theme */}
        <FontAwesome5
          name={theme === 'light' ? 'moon' : 'sun'}
          size={24}
          color={colors.text}
        />
        <Text style={[styles.toggleText, { color: colors.text }]}>
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </Text>
      </TouchableOpacity>

      {/* Add more settings options here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
