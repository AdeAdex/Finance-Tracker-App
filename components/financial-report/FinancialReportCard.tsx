import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "@/context/ThemeProvider";
import { Colors } from "@/constants/Colors";
import { AppButton } from "@/components/AppButton"; // Corrected import path for AppButton
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; // Import NativeStackNavigationProp
import { FinanceData } from "@/types/FinanceData"; // Import FinanceData type

interface FinancialReportCardProps {
  report: FinanceData; // Update to expect a single 'report' prop
  onPressDetail: () => void; // Callback function when "See the full detail" is pressed
}

type RootStackParamList = {
  FinanceReportDetails: undefined;
  Income: undefined;
};

type ExpenseNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "FinanceReportDetails"
>;

const { width } = Dimensions.get("window");

const FinancialReportCard: React.FC<FinancialReportCardProps> = ({
  report, // Destructure the 'report' prop
  onPressDetail,
}) => {
  const { theme } = useTheme();
  const colors = Colors[theme];
  const navigation = useNavigation<ExpenseNavigationProp>();

  return (
    <View style={[styles.card, { backgroundColor: report.backgroundColor }]}>
      {/* Title Section */}
      <Text style={[styles.subtitle, { color: "white" }]}>This Month</Text>

      {/* Amount Section */}
      <Text style={[styles.title, { color: "white" }]}>{report.title}</Text>
      <Text style={styles.amountValue}>${report.amount}</Text>

      {/* Biggest Source Section */}
      <View style={[styles.sourceContainer]}>
        <View style={styles.sourceMain}>
          <View style={styles.sourceTextContainer}>
            <Text style={styles.biggestSourceText}>
              {report.title === "You Spend 💸" ? "and" : ""} your biggest
            </Text>
            <Text style={styles.biggestSourceText}>
              {report.title === "You Spend 💸" ? "spending" : "income"} is from
            </Text>
            {/* Display only the first item */}
            {report.biggestSources.length > 0 && (
              <View style={styles.sourceTypeMainContainer}>
                <View style={styles.sourceTypeContainer}>
                  <Image source={report.sourceIcon} style={styles.sourceIcon} />
                  <Text style={styles.sourceType}>
                    {report.biggestSources[0].name}
                  </Text>
                </View>
                <Text style={styles.sourceAmount}>
                  +${report.biggestSources[0].amount}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Detail Button */}
      <AppButton
        onPress={() => navigation.navigate("FinanceReportDetails")}
        title="See the full detail"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: width * 0.9,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // marginVertical: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 10,
    color: "#FFF",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FFF",
  },
  amountValue: {
    fontSize: 60,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 30,
    lineHeight: 70,
  },
  sourceContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sourceMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  sourceTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  biggestSourceText: {
    fontSize: 24,
    color: "#0D0E0F",
    lineHeight: 25,
    fontWeight: "500",
    textAlign: "center",
  },
  sourceTypeMainContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sourceTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  sourceType: {
    fontSize: 22,
    lineHeight: 25,
    fontWeight: "600",
    color: "#0D0E0F",
    textAlign: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  sourceIcon: {
    width: 30,
    height: 30,
  },
  sourceAmount: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0D0E0F",
    marginTop: 10,
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
});

export default FinancialReportCard;
