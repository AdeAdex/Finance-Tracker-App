// app/tabs/budget.tsx

import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Colors } from "@/constants/Colors";
import Divider from "@/components/Divider";

const BudgetScreen = () => {
  const budgetData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [500, 700, 800, 900, 850, 950],
      },
    ],
  };

  const budgetCategories = [
    { id: "1", name: "Groceries", amount: 300 },
    { id: "2", name: "Rent", amount: 1200 },
    { id: "3", name: "Utilities", amount: 150 },
    { id: "4", name: "Entertainment", amount: 200 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Monthly Budget</Text>
        <Text style={styles.summary}>Remaining: $1500</Text>
      </View>

      <LineChart
        data={budgetData}
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: Colors.light.background,
          backgroundGradientFrom: Colors.light.background,
          backgroundGradientTo: Colors.light.background,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        bezier
        style={styles.chart}
      />

      <FlatList
        data={budgetCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Text style={styles.categoryName}>{item.name}</Text>
            <Text style={styles.categoryAmount}>${item.amount}</Text>
          </View>
        )}
      />

      <Divider />
      <Button
        title="Add Category"
        onPress={() => {
          /* Navigation to add category screen */
        }}
      />
      <Button
        title="Add Transaction"
        onPress={() => {
          /* Navigation to add transaction screen */
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 16,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  summary: {
    fontSize: 18,
    color: Colors.light.tint,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  categoryName: {
    fontSize: 16,
  },
  categoryAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BudgetScreen;
