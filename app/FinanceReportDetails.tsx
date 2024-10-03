// /app/FinanceReportDetails.tsx

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { financeData } from "@/data/financeData";
import FinancialReportDetailsCard from "@/components/financial-report/FinancialReportDetailsCard";

const FinanceReportDetails = () => {
  const [selectedType, setSelectedType] = useState<"income" | "expense">("income"); // State to toggle

  const handlePressDetail = () => {
    console.log("Full detail pressed");
  };

  const report = financeData.find((r) => r.type === selectedType); // Switch between income/expense

  return (
    <View style={styles.container}>
      {report && (
        <FinancialReportDetailsCard
          report={report}
          onPressDetail={handlePressDetail}
          selectedType={selectedType}
          setSelectedType={setSelectedType} // Pass function to toggle type
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default FinanceReportDetails;
