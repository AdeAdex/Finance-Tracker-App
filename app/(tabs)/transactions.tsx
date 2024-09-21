// // /app/tabs/transactions.tsx

// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, TouchableOpacity, SectionList } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { useTheme } from "@/context/ThemeProvider";
// import { Colors } from "@/constants/Colors";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { ThemedView } from "@/components/ThemedView";
// import { ThemedText } from "@/components/ThemedText";
// import TransactionItem from "@/components/transaction/TransactionItem";
// import FilterModal from "@/components/transaction/FilterModal";
// import AddTransactionModal from "@/components/transaction/AddTransactionModal";
// import { transactions, filterOptions } from "@/data/transactionData";
// import { TransactionSection, FilterOption } from "@/types/transactionTypes";
// import { RootStackParamList } from '@/types/navigation';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RouteProp } from '@react-navigation/native';
// import Divider from "@/components/Divider";

// type TransactionsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Transactions'>;
// type TransactionsScreenRouteProp = RouteProp<RootStackParamList, 'Transactions'>;

// interface TransactionsScreenProps {
//   navigation: TransactionsScreenNavigationProp;
//   route: TransactionsScreenRouteProp;
// }

// const TransactionsScreen: React.FC<TransactionsScreenProps> = ({ route, navigation }) => {
//   const { theme } = useTheme();
//   const colors = Colors[theme];
//   const [selectedMonth, setSelectedMonth] = useState("Month");
//   const [filterModalVisible, setFilterModalVisible] = useState(false);
//   const [addTransactionModalVisible, setAddTransactionModalVisible] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedFilter, setSelectedFilter] = useState<string | null>("expense");
//   const [transactionName, setTransactionName] = useState("");
//   const [transactionAmount, setTransactionAmount] = useState("");

//   // Define your category options here
//   const categoryOptions: FilterOption[] = [
//     { label: 'All Categories', value: 'all' },
//     { label: 'Groceries', value: 'groceries' },
//     { label: 'Utilities', value: 'utilities' },
//     // Add more categories as needed
//   ];


//   const handleCloseAddTransactionModal = () => {
//     setAddTransactionModalVisible(false);
//   };

//   const handleCloseFilterModal = () => {
//     setFilterModalVisible(false);
//   };

//   const handleFilterSelect = (value: string) => {
//     setSelectedFilter(value);
//   };

//   const handleCategorySelect = (value: string | null) => {
//     setSelectedCategory(value);
//   };

//   const renderTransaction = ({ item }: { item: TransactionSection["data"][0] }) => (
//     <TransactionItem item={item} />
//   );

//   return (
//     <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
//       <View style={styles.headerRow}>
//         <View style={styles.pickerContainer}>
//           <Picker
//             selectedValue={selectedMonth}
//             style={[styles.picker, { color: colors.text }]}
//             onValueChange={(itemValue) => setSelectedMonth(itemValue)}
//           >
//             <Picker.Item label="Month" value="Month" />
//             <Picker.Item label="January" value="January" />
//             <Picker.Item label="February" value="February" />
//           </Picker>
//         </View>

//         <TouchableOpacity
//           style={[styles.menuIcon, { backgroundColor: colors.buttonBackground }]}
//           onPress={() => setFilterModalVisible(true)}
//         >
//           <Ionicons name="menu-outline" size={24} color={colors.text} />
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity
//         style={[styles.financialReportButton, { backgroundColor: colors.reportButton }]}
//         onPress={() => setAddTransactionModalVisible(true)}
//       >
//         <ThemedText type="defaultSemiBold" style={[styles.financialReportText, { color: colors.tabIconSelected }]}>
//           See your financial report
//         </ThemedText>
//         <Ionicons name="chevron-forward-outline" size={20} color={colors.tabIconSelected} />
//       </TouchableOpacity>

//       <SectionList
//         sections={transactions}
//         keyExtractor={(item) => item.id}
//         renderItem={renderTransaction}
//         renderSectionHeader={({ section }) => (
//           <View style={styles.sectionHeader}>
//             <ThemedText style={[styles.sectionHeaderText, { color: colors.text }]}>{section.title}</ThemedText>
//           </View>
//         )}
//       />

//       <AddTransactionModal
//         visible={addTransactionModalVisible}
//         onClose={handleCloseAddTransactionModal}
//         transactionName={transactionName}
//         onTransactionNameChange={setTransactionName}
//         transactionAmount={transactionAmount}
//         onTransactionAmountChange={setTransactionAmount}
//         onAddTransaction={() => {
//           handleCloseAddTransactionModal();
//         }}
//       />

//       <FilterModal
//         visible={filterModalVisible}
//         onClose={handleCloseFilterModal}
//         selectedFilter={selectedFilter}
//         onFilterSelect={handleFilterSelect}
//         selectedCategory={selectedCategory}
//         onCategorySelect={handleCategorySelect}
//         filterOptions={filterOptions}
//         categoryOptions={categoryOptions} // Pass categoryOptions here
//       />
//       <Divider/>
     
//     </ThemedView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, paddingHorizontal: 16, paddingTop: 74 },
//   headerRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   pickerContainer: {
//     alignSelf: "flex-start",
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//     marginVertical: 10,
//   },
//   picker: { width: 120 },
//   menuIcon: { borderRadius: 12, padding: 10 },
//   financialReportButton: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#F4F3FF",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 24,
//   },
//   financialReportText: { fontSize: 16 },
//   sectionList: { borderRadius: 20, overflow: "hidden" },
//   sectionHeader: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     marginBottom: 8,
//     borderRadius: 8,
//     marginTop: 24,
//   },
//   sectionHeaderText: { fontSize: 16, fontWeight: "700" },
//   transactionCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//     marginVertical: 4,
//     borderRadius: 12,
//     borderWidth: 1,
//   },
//   iconContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 16,
//   },
//   transactionDetails: { flex: 1 },
//   description: { fontSize: 16, fontWeight: "600" },
//   details: { fontSize: 14 },
//   amountContainer: { alignItems: "flex-end" },
//   amount: { fontSize: 16, fontWeight: "600" },
//   time: { fontSize: 12 },

//   // Modal styles
//   modalBackground: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     justifyContent: "flex-end",
//   },
//   modalContent: {
//     padding: 16,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     height: "80%",
//   },
//   modalHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   filterHeader: {
//     marginBottom: 15,
//   },
//   modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 16 },
//   filterOption: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//     marginBottom: 16,
//   },
//   button: {
//     borderRadius: 18,
//     padding: 8,
//     alignItems: "center",
//     width: "30%",
//     marginBottom: 8,
//     borderWidth: 1,
//   },
//   applyButton: {
//     padding: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 30,
//   },
//   applyButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
// });

// export default TransactionsScreen;





import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, SectionList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTheme } from "@/context/ThemeProvider";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import TransactionItem from "@/components/transaction/TransactionItem";
import FilterModal from "@/components/transaction/FilterModal";
import AddTransactionModal from "@/components/transaction/AddTransactionModal";
import { transactions, filterOptions } from "@/data/transactionData";
import { TransactionSection, FilterOption } from "@/types/transactionTypes";
import { RootStackParamList } from '@/types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Divider from "@/components/Divider";

type TransactionsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Transactions'>;
type TransactionsScreenRouteProp = RouteProp<RootStackParamList, 'Transactions'>;

interface TransactionsScreenProps {
  navigation: TransactionsScreenNavigationProp;
  route: TransactionsScreenRouteProp;
}

const TransactionsScreen: React.FC<TransactionsScreenProps> = ({ route, navigation }) => {
  const { theme } = useTheme();
  const colors = Colors[theme];
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [addTransactionModalVisible, setAddTransactionModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>("expense");
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const categoryOptions: FilterOption[] = [
    { label: 'All Categories', value: 'all' },
    { label: 'Groceries', value: 'groceries' },
    { label: 'Utilities', value: 'utilities' },
    // Add more categories as needed
  ];

  const handleCloseAddTransactionModal = () => {
    setAddTransactionModalVisible(false);
  };

  const handleCloseFilterModal = () => {
    setFilterModalVisible(false);
  };

  const handleFilterSelect = (value: string) => {
    setSelectedFilter(value);
  };

  const handleCategorySelect = (value: string | null) => {
    setSelectedCategory(value);
  };

  const renderTransaction = ({ item }: { item: TransactionSection["data"][0] }) => (
    <TransactionItem item={item} />
  );

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.headerRow}>
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

        <TouchableOpacity
          style={[styles.menuIcon, { backgroundColor: colors.buttonBackground }]}
          onPress={() => setFilterModalVisible(true)}
        >
          <Ionicons name="menu-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.financialReportButton, { backgroundColor: colors.reportButton }]}
        onPress={() => setAddTransactionModalVisible(true)}
      >
        <ThemedText type="defaultSemiBold" style={[styles.financialReportText, { color: colors.tabIconSelected }]}>
          See your financial report
        </ThemedText>
        <Ionicons name="chevron-forward-outline" size={20} color={colors.tabIconSelected} />
      </TouchableOpacity>

      {/* Wrap SectionList in a View to allow scrolling */}
      <View style={styles.sectionListContainer}>
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
      </View>

      <AddTransactionModal
        visible={addTransactionModalVisible}
        onClose={handleCloseAddTransactionModal}
        transactionName={transactionName}
        onTransactionNameChange={setTransactionName}
        transactionAmount={transactionAmount}
        onTransactionAmountChange={setTransactionAmount}
        onAddTransaction={() => {
          handleCloseAddTransactionModal();
        }}
      />

      <FilterModal
        visible={filterModalVisible}
        onClose={handleCloseFilterModal}
        selectedFilter={selectedFilter}
        onFilterSelect={handleFilterSelect}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        filterOptions={filterOptions}
        categoryOptions={categoryOptions} // Pass categoryOptions here
      />
      <Divider />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 44, paddingBottom: 70 },
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
  sectionListContainer: { flex: 1 }, // Allow SectionList to fill available space
  sectionHeader: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    marginTop: 24,
  },
  sectionHeaderText: { fontSize: 16, fontWeight: "700" },
});

export default TransactionsScreen;
