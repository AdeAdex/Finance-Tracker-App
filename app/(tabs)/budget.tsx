//  /app/tabs/budget.tsx

import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function BudgetScreen() {
  const [budget, setBudget] = React.useState('');
  const [totalSpent, setTotalSpent] = React.useState(0);

  React.useEffect(() => {
    const loadBudget = async () => {
      try {
        const storedBudget = await AsyncStorage.getItem('budget');
        if (storedBudget !== null) {
          setBudget(storedBudget);
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Failed to load budget.',
        });
      }
    };

    loadBudget();
  }, []);

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('budget', budget);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Budget saved successfully.',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to save budget.',
      });
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Set Your Budget</Text>
      <TextInput
        style={styles.input}
        value={budget}
        onChangeText={setBudget}
        placeholder="Enter your budget"
        placeholderTextColor="white"
        keyboardType="numeric"
      />
      <Button title="Save Budget" onPress={handleSave} />
      <View style={styles.info}>
        <Text style={styles.infoText}>Current Budget: ${budget}</Text>
        <Text style={styles.infoText}>Total Spent: ${totalSpent}</Text>
      </View>
      {/* Toast component should be placed at a higher level in the component tree */}
      <Toast />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingVertical: 60,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    color: 'white',
  },
  info: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 18,
    color: 'white',
  },
});
