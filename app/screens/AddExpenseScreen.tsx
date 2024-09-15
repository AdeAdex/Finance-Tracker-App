// /screens/AddExpenseScreen.tsx

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/context/ThemeProvider';

const AddExpenseScreen = () => {
  const { theme } = useTheme();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    // Handle the expense addition logic here
    Alert.alert('Expense Added', `Description: ${description}\nAmount: $${amount}`);
  };

  const colors = theme === 'dark'
    ? { background: '#1D3D47', text: '#fff', inputBackground: '#2C3E50', buttonColor: '#FF5722' }
    : { background: '#F3F4F6', text: '#333', inputBackground: '#fff', buttonColor: '#4CAF50' };

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ThemedText type="title" style={[styles.title, { color: colors.text }]}>Add Expense</ThemedText>
        <TextInput
          style={[styles.input, { backgroundColor: colors.inputBackground }]}
          placeholder="Expense Description"
          placeholderTextColor={colors.text}
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={[styles.input, { backgroundColor: colors.inputBackground }]}
          placeholder="Amount"
          placeholderTextColor={colors.text}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <Button title="Add Expense" color={colors.buttonColor} onPress={handleAddExpense} />
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
});

export default AddExpenseScreen;
