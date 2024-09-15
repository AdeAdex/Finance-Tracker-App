// /screens/ExploreScreen.tsx

import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeProvider';
import { ThemedView } from '@/components/ThemedView';

const data = [
  { id: '1', title: 'Category 1' },
  { id: '2', title: 'Category 2' },
  { id: '3', title: 'Category 3' },
  // Add more categories or items here
];

const ExploreScreen = () => {
  const { theme } = useTheme();
  const colors = theme === 'dark'
    ? { background: '#1D3D47', text: '#fff', itemBackground: '#2C3E50', itemText: '#fff' }
    : { background: '#F3F4F6', text: '#333', itemBackground: '#fff', itemText: '#333' };

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <TouchableOpacity style={[styles.item, { backgroundColor: colors.itemBackground }]}>
      <Text style={[styles.itemText, { color: colors.itemText }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Explore</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
  item: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ExploreScreen;
