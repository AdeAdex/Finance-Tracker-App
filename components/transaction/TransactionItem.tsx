// components/TransactionItem.tsx


import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "@/components/ThemedText";
import { Transaction } from "@/types/transactionTypes";
import { useTheme } from "@/context/ThemeProvider";
import { Colors } from "@/constants/Colors";

interface TransactionItemProps {
  item: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ item }) => {
  const { theme } = useTheme();
  const colors = Colors[theme];

  return (
    <View
      style={[
        styles.transactionItem,
        { backgroundColor: colors.background, borderColor: colors.border },
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor:
              item.category === "expense"
                ? colors.error + "30"
                : colors.success + "30",
          },
        ]}
      >
        <Ionicons
          name={item.icon as any}
          size={24}
          color={item.category === "expense" ? colors.error : colors.success}
        />
      </View>
      <View style={styles.transactionDetails}>
        <ThemedText
          type="defaultSemiBold"
          style={[styles.description, { color: colors.text }]}
        >
          {item.description}
        </ThemedText>
        <ThemedText
          type="default"
          style={[styles.details, { color: colors.icon }]}
        >
          {item.details}
        </ThemedText>
      </View>
      <View style={styles.amountContainer}>
        <ThemedText
          type="defaultSemiBold"
          style={[
            styles.amount,
            {
              color: item.amount.startsWith("-")
                ? colors.error
                : colors.success,
            },
          ]}
        >
          {item.amount}
        </ThemedText>
        <ThemedText
          type="default"
          style={[styles.time, { color: colors.icon }]}
        >
          {item.time}
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionItem: {
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
});

export default TransactionItem;
