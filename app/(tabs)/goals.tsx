// /app/tabs/goals.tsx

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

export default function GoalsScreen() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState<string[]>([]);

  const handleAddGoal = () => {
    setGoals([...goals, goal]);
    setGoal('');
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Financial Goals</Text>
      <TextInput
        style={styles.input}
        value={goal}
        onChangeText={setGoal}
        placeholder="Enter your financial goal"
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
      <View style={styles.goalsList}>
        {goals.map((g, index) => (
          <Text key={index} style={styles.goal}>{g}</Text>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
  },
  goalsList: {
    marginTop: 20,
  },
  goal: {
    fontSize: 18,
    marginVertical: 5,
  },
});
