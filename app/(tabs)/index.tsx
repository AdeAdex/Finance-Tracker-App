// /app/(tabs)/profile.tsx


import React, { useState, useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SectionList,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@/context/ThemeProvider";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import TransactionItem from "@/components/transaction/TransactionItem"; // Reusable component
import { transactions } from "@/data/transactionData"; // Shared data
import { Transaction, TransactionSection } from "@/types/transactionTypes";
import avatar from "@/assets/images/12.png";
import { Picker } from "@react-native-picker/picker";
import { months } from "@/data/monthsData";

export default function DashboardScreen() {
  const { theme } = useTheme();
  const colors = Colors[theme];

  const [selectedMonth, setSelectedMonth] = useState("October");



  const renderTransaction = ({
    item,
  }: {
    item: TransactionSection["data"][0];
  }) => (
    <TransactionItem item={item} /> // Use the reusable component
  );

  return (
    <ThemedView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Profile Section */}
      <View style={styles.profile}>
        {/* Profile Image */}
        <TouchableOpacity>
        <Image source={avatar} style={styles.image} />
        </TouchableOpacity>

      
        {/* Dynamic Picker with .map() */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedMonth}
            onValueChange={(itemValue) => setSelectedMonth(itemValue)}
            style={[styles.picker, { color: colors.text }]}
          >
            {months.map((month) => (
              <Picker.Item key={month.value} label={month.label} value={month.value} />
            ))}
          </Picker>
        </View>

        {/* Notification Icon */}
        <TouchableOpacity>
        <Ionicons name="notifications-outline" size={28} color={colors.tabIconSelected} />
        </TouchableOpacity>
      </View>
      {/* Account Balance Section */}
      <View style={styles.balanceContainer}>
        <Text style={[styles.balanceLabel, { color: colors.text }]}>
          Account Balance
        </Text>
        <Text style={[styles.balanceAmount, { color: colors.text }]}>
          $9400
        </Text>
      </View>

      {/* Income and Expenses Overview */}
      <View style={styles.summaryContainer}>
        <View
          style={[
            styles.summaryBox,
            { backgroundColor: colors.cardGreen },
          ]}
        >
          <Ionicons name="cash" size={24} color="white" />
          <View>
          <Text style={[styles.summaryText, { color: "white" }]}>
            Income
          </Text>
          <Text style={[styles.summaryAmount, { color: "white" }]}>
            $5000
          </Text>
          </View>
        </View>
        <View
          style={[styles.summaryBox, { backgroundColor: colors.cardRed }]}
        >
          <Ionicons name="wallet" size={24} color="white" />
          <View>
          <Text style={[styles.summaryText, { color: "white" }]}>
            Expenses
          </Text>
          <Text style={[styles.summaryAmount, { color: "white" }]}>
            $1200
          </Text>
          </View>
        </View>
      </View>

      {/* Recent Transactions Section */}
      <View style={styles.transactionsContainer}>
        <View style={styles.transactionsHeader}>
          <Text style={[styles.transactionsTitle, { color: colors.text }]}>
            Recent Transaction
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.reportButton }]}
          >
            <Text style={[styles.seeAllText, { color: "#000" }]}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* <FlatList
          data={transactions}
          renderItem={renderTransactionItem}
          keyExtractor={(item) => item.id}
        /> */}

        <SectionList
          sections={transactions}
          keyExtractor={(item) => item.id}
          renderItem={renderTransaction}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop:50,
    paddingBottom: 100,
    // marginBottom: 90
  },
  balanceContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceLabel: {
    fontSize: 18,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: "bold",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  summaryBox: {
    width: "48%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: 'row',
    gap: 10,
  },
  summaryText: {
    fontSize: 16,
    marginTop: 8,
  },
  summaryAmount: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
  transactionsContainer: {
    flex: 1,
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 18,
    padding: 8,
    alignItems: "center",
    width: "30%", // Ensure 3 items per row
    marginBottom: 8, // Add some margin for spacing between rows
    borderWidth: 1,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "500",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  transactionDetails: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: "600",
  },
  details: {
    fontSize: 14,
    marginTop: 4,
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
  },
  time: {
    fontSize: 12,
    marginTop: 4,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  pickerContainer: {
    //     flex: 1,
    marginHorizontal: 16,
    justifyContent: "center", // Vertically center the picker
    //     alignItems: "center", // Horizontally center the picker
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    //     backgroundColor: 'green',
    width: "35%",
  },
  picker: {
    height: 40,
    //     width: "50%", // Control the width of the picker
    //     backgroundColor: 'red'
  },
});
