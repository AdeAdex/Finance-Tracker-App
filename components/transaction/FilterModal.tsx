// /components/transaction/FilterModal.tsx




// components/transaction/FilterModal.tsx

import React from 'react';
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { FilterOption } from '@/types/transactionTypes';
import { useTheme } from '@/context/ThemeProvider';
import { Colors } from '@/constants/Colors';
import { Picker } from "@react-native-picker/picker";


interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  selectedFilter: string | null;
  onFilterSelect: (filter: string) => void;
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  filterOptions: FilterOption[];
  categoryOptions: FilterOption[]; // Ensure this is included
}

const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  onClose,
  selectedFilter,
  onFilterSelect,
  selectedCategory,
  onCategorySelect,
  filterOptions,
  categoryOptions,
}) => {
  const { theme } = useTheme();
  const colors = Colors[theme];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalBackground}
        onPress={onClose}
      >
        <TouchableWithoutFeedback>
          <View style={[styles.modalContent, { backgroundColor: colors.modal }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                Filter Transaction
              </Text>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: colors.TouchableOpacity }]}
                onPress={() => onFilterSelect('')} // Implement reset logic
              >
                <Text style={[{ color: colors.TouchableButton }]}>Reset</Text>
              </TouchableOpacity>
            </View>

            {/* Filter By Options */}
            <View>
              <Text style={[styles.filterHeader, { color: colors.text }]}>Filter By</Text>
              <View style={styles.filterOption}>
                {filterOptions.slice(0, 3).map((option) => (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      styles.button,
                      {
                        borderColor: colors.border,
                        backgroundColor: selectedFilter === option.value
                          ? colors.activeBackground // Highlight active filter
                          : colors.TouchableOpacity,
                      },
                    ]}
                    onPress={() => onFilterSelect(option.value)}
                  >
                    <Text style={[{ color: colors.TouchableButton }]}>{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Sorting Options */}
            <View>
              <Text style={[styles.filterHeader, { color: colors.text }]}>Sort By</Text>
              <View style={styles.filterOption}>
                {filterOptions.slice(3).map((option) => (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      styles.button,
                      {
                        borderColor: colors.border,
                        backgroundColor: selectedFilter === option.value
                          ? colors.activeBackground // Highlight active sort
                          : colors.TouchableOpacity,
                      },
                    ]}
                    onPress={() => onFilterSelect(option.value)}
                  >
                    <Text style={[{ color: colors.TouchableButton }]}>{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Category Options */}
            <View>
              <Text style={[styles.filterHeader, { color: colors.text }]}>Category</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedCategory}
                  style={[styles.picker, { color: colors.text }]}
                  onValueChange={(itemValue) => onCategorySelect(itemValue)}
                >
                  <Picker.Item label="Select Category" value={null} />
                  {categoryOptions.map((option) => (
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
              onPress={onClose}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

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
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: 16,
        },
        button: {
          borderRadius: 18,
          padding: 8,
          alignItems: "center",
          width: "30%",
          marginBottom: 8,
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

export default FilterModal;
