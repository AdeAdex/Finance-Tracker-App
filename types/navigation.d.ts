// /types/navigation.d.ts
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined; // Or if Home has params, define them here
  Transactions: { showModal?: boolean };
  FinanceReport: undefined;
  FinanceReportDetails: undefined;
  
  // add other routes as needed
};
