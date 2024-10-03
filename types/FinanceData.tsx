// types/FinanceData.ts
export interface FinanceData {
  type: "expense" | "income"; // The type of financial data (either expense or income)
  title: string; // Title of the report (e.g., "You Spend 💸", "You Earned 💰")
  amount: number; // Total amount of expense or income
  biggestSources: { name: string; amount: number }[]; // Array of sources with their amounts
  sourceIcon: any; // Icon for the source (URI or local asset)
  backgroundColor: string; // Background color for the card (e.g., "#FF3B30" for red, "#34C759" for green)
}
