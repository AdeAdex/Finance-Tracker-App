// /screens/ReportsScreen.tsx

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '@/context/ThemeProvider';
import { ThemedView } from '@/components/ThemedView';

const ReportsScreen = () => {
  const { theme } = useTheme();
  const colors = theme === 'dark'
    ? { background: '#1D3D47', text: '#fff' }
    : { background: '#F3F4F6', text: '#333' };

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Reports</Text>
      {/* Add your report components here, such as charts or lists */}
      <View style={styles.reportContainer}>
        <Text style={[styles.reportText, { color: colors.text }]}>Report content will be here.</Text>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reportContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reportText: {
    fontSize: 16,
  },
});

export default ReportsScreen;
