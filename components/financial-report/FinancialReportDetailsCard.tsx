import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LineChart } from "react-native-chart-kit"; // Import LineChart from react-native-chart-kit
import { FinanceData } from "@/types/FinanceData"; // Import the FinanceData type

interface FinancialReportDetailsCardProps {
  report: FinanceData;
  onPressDetail: () => void;
  selectedType: "income" | "expense";
  setSelectedType: (type: "income" | "expense") => void;
}

const { width } = Dimensions.get("window");

const FinancialReportDetailsCard: React.FC<FinancialReportDetailsCardProps> = ({
  report,
  onPressDetail,
  selectedType,
  setSelectedType,
}) => {
  // Sample data for the chart (you can fetch actual data from your financeData)
  const chartDataIncome = [500, 700, 300, 900]; // Example income data
  const chartDataExpense = [400, 600, 800, 500]; // Example expense data

  return (
    <View style={[styles.card]}>
      {/* Month Selector and Icon Section */}
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.monthSelector}>
          <Text style={styles.monthText}>Month</Text>
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/Frame 70.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/pie chart.png")}
              style={styles.pieIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Amount and Graph Section */}
      <Text style={styles.amountValue}>${report.amount}</Text>

      {/* Graph */}
      <View style={styles.graphContainer}>
        <LineChart
          data={{
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
                data:
                  selectedType === "income"
                    ? chartDataIncome
                    : chartDataExpense,
                color: (opacity = 1) =>
                  selectedType === "income"
                    ? `rgba(52, 199, 89, ${opacity})`
                    : `rgba(255, 59, 48, ${opacity})`, // Dynamic color based on selected type
              },
            ],
          }}
          width={width * 0.9} // from react-native
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: "#FFF",
            backgroundGradientFrom: "#FFF",
            backgroundGradientTo: "#FFF",
            decimalPlaces: 2, // optional, defaults to 2
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: selectedType === "income" ? "#34C759" : "#FF3B30",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      {/* Income/Expense Switch */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedType === "expense" && styles.activeButton,
          ]}
          onPress={() => setSelectedType("expense")} // Switch to expense
        >
          <Text
            style={[
              styles.toggleText,
              selectedType === "expense" && styles.activeText,
            ]}
          >
            Expense
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedType === "income" && styles.activeButton,
          ]}
          onPress={() => setSelectedType("income")} // Switch to income
        >
          <Text
            style={[
              styles.toggleText,
              selectedType === "income" && styles.activeText,
            ]}
          >
            Income
          </Text>
        </TouchableOpacity>
      </View>

      {/* Transaction Section */}
      <View style={styles.transactionContainer}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <View style={styles.transactions}>
          {report.biggestSources.map((source, index) => (
            <View key={index} style={styles.transactionItem}>
              {/* Transaction Icon, Details */}
              <Text style={styles.transactionName}>{source.name}</Text>
              <Text style={styles.transactionAmount}>+${source.amount}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    width: width * 0.9,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  monthSelector: {
    borderWidth: 1,
    borderColor: "#CCC",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  monthText: {
    fontSize: 14,
    color: "#000",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
  },
  pieIcon: {
    width: 20,
    height: 20,
    marginVertical: 'auto',
    marginLeft: 5,
  },
  amountValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  graphContainer: {
    width: "100%",
    height: 220, // Set the height for the graph
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
  },
  activeButton: {
    backgroundColor: "#4A00E0", // Active button color
  },
  toggleText: {
    fontSize: 18,
    color: "#7A7A7A",
  },
  activeText: {
    color: "#FFF",
  },
  transactionContainer: {
    width: "100%",
    marginTop: 20,
  },
  transactionTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: "#7A7A7A",
  },
  transactions: {
    width: "100%",
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionAmount: {
    color: "#34C759", // Green for income
  },
});

export default FinancialReportDetailsCard;
