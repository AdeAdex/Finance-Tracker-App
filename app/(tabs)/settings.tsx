//  /app/tabs/settings.tsx


import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
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
      <ThemedText type="title" style={[styles.header, { color: colors.text }]}>
        Settings
      </ThemedText>

      <View style={styles.section}>
        <TouchableOpacity onPress={toggleTheme} style={[styles.themeToggle, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder  }]}>
          <FontAwesome5
            name={theme === 'light' ? 'moon' : 'sun'}
            size={24}
            color={colors.icon} // Use the icon color from the current theme
          />
          <ThemedText type="default" style={[styles.toggleText, { color: colors.text }]}>
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <ThemedText type="subtitle" style={[styles.subtitle, { color: colors.text }]}>
          Additional Settings
        </ThemedText>
        <TouchableOpacity style={[styles.optionButton, { borderColor: colors.border }]}>
          <ThemedText type="default" style={[styles.optionText, { color: colors.text }]}>
            Account Settings
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.optionButton, { borderColor: colors.border }]}>
          <ThemedText type="default" style={[styles.optionText, { color: colors.text }]}>
            Notifications
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.optionButton, { borderColor: colors.border }]}>
          <ThemedText type="default" style={[styles.optionText, { color: colors.text }]}>
            Privacy
          </ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 74,
    justifyContent: 'flex-start', // Align content at the top
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    width: '100%',
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5, // Adds a subtle shadow for a material design effect
    borderWidth: 1,
  },
  toggleText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  optionButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SettingsScreen;
