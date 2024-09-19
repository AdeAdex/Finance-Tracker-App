// data/transactionData.ts
import { TransactionSection, FilterOption } from "@/types/transactionTypes";

export const transactions: TransactionSection[] = [
  {
    title: "Today",
    data: [
      {
        id: "1",
        description: "Entertainment",
        details: "Buy some grocery",
        amount: "-$20",
        time: "10:00 AM",
        icon: "basket",
        category: "expense",
      },
      {
        id: "2",
        description: "Subscription",
        details: "IEDC+ DSTV",
        amount: "-$80",
        time: "03:30 PM",
        icon: "document",
        category: "expense",
      },
      {
        id: "3",
        description: "Food Stuffs",
        details: "Buy food",
        amount: "-$32",
        time: "07:30 PM",
        icon: "restaurant",
        category: "expense",
      },
    ],
  },
  {
    title: "Yesterday",
    data: [
      {
        id: "4",
        description: "Salary Received",
        details: "Salary for August",
        amount: "+5000",
        time: "04:30 PM",
        icon: "cash",
        category: "income",
      },
      {
        id: "5",
        description: "Transportation",
        details: "Charging Tesla",
        amount: "-$10",
        time: "08:30 PM",
        icon: "car",
        category: "expense",
      },
    ],
  },
];

export const filterOptions: FilterOption[] = [
  { label: "Income", value: "income" },
  { label: "Expense", value: "expense" },
  { label: "Transfer", value: "transfer" },
  { label: "Highest", value: "highest" },
  { label: "Lowest", value: "lowest" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];
