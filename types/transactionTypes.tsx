// /types/transactionTypes.ts

// Define a type for individual transaction items
export type Transaction = {
  id: string;
  description: string;
  details: string;
  amount: string;
  time: string;
  icon: string;
  category: "expense" | "income";
};

// Define a type for sections of transactions
export type TransactionSection = {
  title: string;
  data: Transaction[];
};

// Define a type for filter options
export type FilterOption = {
  label: string;
  value: string;
};
