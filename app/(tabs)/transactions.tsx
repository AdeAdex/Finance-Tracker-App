// /app/tabs/transactions.tsx

import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView'; // Import ThemedView
import { ThemedText } from '@/components/ThemedText'; // Import ThemedText
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons
import { Collapsible } from '@/components/Collapsible'; // Import Collapsible
import { useTheme } from '@/context/ThemeProvider'; // Import your theme hook
import { Colors } from '@/constants/Colors';

const transactions = [
  { id: '1', date: '2024-09-10', description: 'Groceries', amount: '-$50' },
  { id: '2', date: '2024-09-11', description: 'Salary', amount: '+$2000' },
];

export default function TransactionsScreen() {
  const { theme } = useTheme(); // Get the current theme
  const colors = Colors[theme];

  const totalSpending = transactions
    .filter(txn => txn.amount.startsWith('-'))
    .reduce((acc, txn) => acc + parseFloat(txn.amount.replace('$', '')), 0);

  const totalIncome = transactions
    .filter(txn => txn.amount.startsWith('+'))
    .reduce((acc, txn) => acc + parseFloat(txn.amount.replace('$', '')), 0);

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <ThemedText type="title" style={[styles.headerTitle, { color: colors.text }]}>Transactions</ThemedText>
        <ThemedText type="defaultSemiBold" style={[styles.summary, { color: colors.text }]}>
          Total Spending: ${totalSpending.toFixed(2)}
          {'\n'}Total Income: ${totalIncome.toFixed(2)}
        </ThemedText>
      </View>

      <Collapsible title="Recent Transactions">
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.item, { borderBottomColor: colors.border }]}>
              <Ionicons
                name={item.amount.startsWith('-') ? 'arrow-down-circle' : 'arrow-up-circle'}
                size={24}
                color={item.amount.startsWith('-') ? colors.error : colors.success}
                style={styles.icon}
              />
              <View style={styles.details}>
                <ThemedText type="default" style={[styles.date, { color: colors.text }]}>{item.date}</ThemedText>
                <ThemedText type="default" style={[styles.description, { color: colors.text }]}>{item.description}</ThemedText>
              </View>
              <ThemedText type="defaultSemiBold" style={[styles.amount, { color: item.amount.startsWith('-') ? colors.error : colors.success }]}>
                {item.amount}
              </ThemedText>
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
    paddingHorizontal: 16,
    paddingTop: 74,
    paddingBottom: 10,
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  headerTitle: {
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  date: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    marginVertical: 4,
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'right',
  },
});
