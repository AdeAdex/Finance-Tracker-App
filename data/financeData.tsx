import { FinanceData } from "@/types/FinanceData";

export const financeData: FinanceData[] = [
  {
    type: "expense",
    title: "You Spend 💸",
    amount: 332,
    biggestSources: [
      { name: "Subscription", amount: 80 },
      { name: "Groceries", amount: 50 },
      { name: "Entertainment", amount: 40 },
    ],
    sourceIcon: require("@/assets/images/12.png"),
    backgroundColor: "#FF3B30", // Red color for expense
  },
  {
    type: "income",
    title: "You Earned 💰",
    amount: 6000,
    biggestSources: [
      { name: "Salary", amount: 5000 },
      { name: "Investments", amount: 800 },
      { name: "Freelancing", amount: 200 },
    ],
    sourceIcon: require("@/assets/images/12.png"),
    backgroundColor: "#34C759", // Green color for income
  },
];
