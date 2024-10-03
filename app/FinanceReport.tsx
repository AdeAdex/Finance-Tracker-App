// /app/FinanceScreen.tsx

import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FinancialReportCard from "@/components/financial-report/FinancialReportCard";
import { financeData } from "@/data/financeData";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Divider from "@/components/Divider";

type RootStackParamList = {
  Transaction: undefined; // Define the Transaction screen in your navigation stack
};

type FinanceScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Transaction"
>;

const FinanceScreen = () => {
  const [selectedReport, setSelectedReport] = useState<"income" | "expense">(
    "income"
  ); // Initial state set to 'income'
  const navigation = useNavigation<FinanceScreenNavigationProp>();

  const handleDetailPress = (type: "income" | "expense") => {
    // Handle the press event for "See the full detail"
    console.log(`${type} detail pressed`);
    // Navigate to the detail screen if needed
  };

  // Filter the report data based on the selected type (either 'income' or 'expense')
  const filteredReport = financeData.find(
    (report) => report.type === selectedReport
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Finance Report/${selectedReport}`,
      headerTitleAlign: "center", // This centers the title
      headerStyle: {
        backgroundColor: filteredReport?.backgroundColor, // Set the header background color
      },
      headerTintColor: "white", // Set the header text color
    });
  }, [navigation, selectedReport, filteredReport]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: filteredReport?.backgroundColor },
      ]}
    >
      {/* Toggle Buttons for Income and Expense */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedReport === "income" && styles.activeButton,
          ]}
          onPress={() => setSelectedReport("income")}
        >
          <Text
            style={[
              styles.toggleText,
              selectedReport === "income" && styles.activeText,
            ]}
          >
            Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedReport === "expense" && styles.activeButton,
          ]}
          onPress={() => setSelectedReport("expense")}
        >
          <Text
            style={[
              styles.toggleText,
              selectedReport === "expense" && styles.activeText,
            ]}
          >
            Expense
          </Text>
        </TouchableOpacity>
      </View>

      {/* Finance Report Card */}
      {filteredReport && (
        <FinancialReportCard
          report={filteredReport} // Pass the filtered report data
          onPressDetail={() => handleDetailPress(filteredReport.type)} // Handle detail press for the specific report
        />
      )}
      <Divider dividerStyle={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
  },
  activeButton: {
    backgroundColor: "#4A00E0", // Active button background color
  },
  toggleText: {
    fontSize: 18,
    color: "#7A7A7A", // Default text color
  },
  activeText: {
    color: "#FFF", // Text color when the button is active
  },
  buttonStyle: {
    marginBottom: 16,
    width: "100%",
    backgroundColor: "#FFF",
    marginTop: "auto",
  },
  buttonTextStyle: {
    color: "#4A00E0",
    fontSize: 20,
    lineHeight: 21.78,
    fontWeight: "600",
  },
  divider: {
    borderTopColor: "white",
  },
});

export default FinanceScreen;
