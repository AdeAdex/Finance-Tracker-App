// /app/tabs/transactions.tsx

import React, { useState } from "react";
import {
  StyleSheet,
  SectionList,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@/context/ThemeProvider";
import { Colors } from "@/constants/Colors";
import { Picker } from "@react-native-picker/picker";
import TransactionItem from "@/components/TransactionItem"; // Import the new component
import { transactions, filterOptions } from "@/data/transactionData";
import { TransactionSection } from "@/types/transactionTypes";

export default function TransactionsScreen() {
  const { theme } = useTheme();
  const colors = Colors[theme];
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    "expense"
  );

  // Function to handle selection of filter options
  const handleFilterSelect = (value: string) => {
    setSelectedFilter(value);
  };

  // Function to handle category selection
  const handleCategorySelect = (value: string | null) => {
    setSelectedCategory(value);
  };

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
      {/* Header Row with Dropdown and Menu Icon */}
      <View style={styles.headerRow}>
        {/* Month Picker */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedMonth}
            style={[styles.picker, { color: colors.text }]}
            onValueChange={(itemValue) => setSelectedMonth(itemValue)}
          >
            <Picker.Item label="Month" value="Month" />
            <Picker.Item label="January" value="January" />
            <Picker.Item label="February" value="February" />
          </Picker>
        </View>

        {/* Menu Icon to trigger modal */}
        <TouchableOpacity
          style={[
            styles.menuIcon,
            { backgroundColor: colors.buttonBackground },
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="menu-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Financial Report Button */}
      <TouchableOpacity
        style={[
          styles.financialReportButton,
          { backgroundColor: colors.reportButton },
        ]}
      >
        <ThemedText
          type="defaultSemiBold"
          style={[
            styles.financialReportText,
            { color: colors.tabIconSelected },
          ]}
        >
          See your financial report
        </ThemedText>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={colors.tabIconSelected}
        />
      </TouchableOpacity>

      {/* Transactions Section List */}
     
      <SectionList
        sections={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <ThemedText style={[styles.sectionHeaderText, { color: colors.text }]}>{section.title}</ThemedText>
          </View>
        )}
      />

      {/* Modal for Filter */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Modal Background */}
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setModalVisible(false)}
        >
          {/* Ensure the modal content does not close when touched */}
          <TouchableWithoutFeedback>
            <View
              style={[styles.modalContent, { backgroundColor: colors.modal }]}
            >
              <View style={styles.modalHeader}>
                <Text style={[styles.modalTitle, { color: colors.text }]}>
                  Filter Transaction
                </Text>
                <TouchableOpacity
                  style={[
                    styles.button,
                    { backgroundColor: colors.TouchableOpacity },
                  ]}
                >
                  <ThemedText
                    type="default"
                    style={[{ color: colors.TouchableButton }]}
                  >
                    Reset
                  </ThemedText>
                </TouchableOpacity>
              </View>

              {/* Filter By Options */}
              <View>
                <ThemedText
                  type="default"
                  style={[styles.filterHeader, { color: colors.text }]}
                >
                  Filter By
                </ThemedText>
                <View style={styles.filterOption}>
                  {filterOptions.slice(0, 3).map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.button,
                        {
                          borderColor: colors.border,
                          backgroundColor:
                            selectedFilter === option.value
                              ? colors.activeBackground // Highlight active filter
                              : colors.TouchableOpacity,
                        },
                      ]}
                      onPress={() => handleFilterSelect(option.value)}
                    >
                      <ThemedText
                        type="default"
                        style={[{ color: colors.TouchableButton }]}
                      >
                        {option.label}
                      </ThemedText>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Sorting Options */}
              <View>
                <ThemedText
                  type="default"
                  style={[styles.filterHeader, { color: colors.text }]}
                >
                  Sort By
                </ThemedText>
                <View style={styles.filterOption}>
                  {filterOptions.slice(3).map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.button,
                        {
                          borderColor: colors.border,
                          backgroundColor:
                            selectedFilter === option.value
                              ? colors.activeBackground // Highlight active sort
                              : colors.TouchableOpacity,
                        },
                      ]}
                      onPress={() => handleFilterSelect(option.value)}
                    >
                      <ThemedText
                        type="default"
                        style={[{ color: colors.TouchableButton }]}
                      >
                        {option.label}
                      </ThemedText>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Category Options */}
              <View>
                <ThemedText
                  type="default"
                  style={[styles.filterHeader, { color: colors.text }]}
                >
                  Category
                </ThemedText>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={selectedCategory}
                    style={[styles.picker, { color: colors.TouchableButton }]}
                    onValueChange={(itemValue) =>
                      handleCategorySelect(itemValue)
                    }
                  >
                    <Picker.Item label="Select Category" value={null} />
                    {filterOptions.slice(0, 3).map((option) => (
                      <Picker.Item
                        key={option.value}
                        label={option.label}
                        value={option.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              {/* Apply Button */}
              <TouchableOpacity
                style={[styles.applyButton, { backgroundColor: "#5A67D8" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 74 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  pickerContainer: {
    alignSelf: "flex-start",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  picker: { width: 120 },
  menuIcon: { borderRadius: 12, padding: 10 },
  financialReportButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F4F3FF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  financialReportText: { fontSize: 16 },
  sectionList: { borderRadius: 20, overflow: "hidden" },
  sectionHeader: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    marginTop: 24,
  },
  sectionHeaderText: { fontSize: 16, fontWeight: "700" },
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  transactionDetails: { flex: 1 },
  description: { fontSize: 16, fontWeight: "600" },
  details: { fontSize: 14 },
  amountContainer: { alignItems: "flex-end" },
  amount: { fontSize: 16, fontWeight: "600" },
  time: { fontSize: 12 },

  // Modal styles
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  filterHeader: {
    marginBottom: 15,
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 16 },
  filterOption: {
    flexDirection: "row",
    justifyContent: "space-between", // Ensure even spacing between items
    flexWrap: "wrap", // Allow wrapping when there are more than 3 items
    marginBottom: 16,
  },
  button: {
    borderRadius: 18,
    padding: 8,
    alignItems: "center",
    width: "30%", // Ensure 3 items per row
    marginBottom: 8, // Add some margin for spacing between rows
    borderWidth: 1,
  },
  applyButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  applyButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
