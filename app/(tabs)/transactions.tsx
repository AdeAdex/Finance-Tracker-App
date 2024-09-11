// /app/tabs/transactions.tsx

import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';

const transactions = [
  { id: '1', date: '2024-09-10', description: 'Groceries', amount: '-$50' },
  { id: '2', date: '2024-09-11', description: 'Salary', amount: '+$2000' },
];

export default function TransactionsScreen() {
  return (
    <ThemedView style={styles.container}>
      <Collapsible title="Recent Transactions">
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          )}
        />
      </Collapsible>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  date: {
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
  },
  amount: {
    color: 'green',
  },
});
