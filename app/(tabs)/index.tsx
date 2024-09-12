// /app/tabs/index.tsx

import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/context/ThemeProvider';

export default function HomeScreen() {
  const { theme } = useTheme();
  const colors = theme === 'dark'
    ? { background: '#1D3D47', text: '#fff', card: '#2C3E50', cardText: '#fff', accent: '#FF5722' }
    : { background: '#F3F4F6', text: '#333', card: '#fff', cardText: '#333', accent: '#4CAF50' };

  const navigation = useNavigation();

  const handleAddExpense = () => {
    // navigation.navigate('AddExpense'); // Navigate to AddExpense screen
  };

  const handleViewReports = () => {
    // navigation.navigate('Reports'); // Navigate to Reports screen
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        dark: '#1D3D47', // Dark theme background color
        light: '#F3F4F6' // Light theme background color
      }}
      headerImage={
        <ThemedView style={[styles.header, { backgroundColor: colors.background }]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHA51gtpJAldEsG2OLtxy3jRveaGdV1s4MQ&s',
            }}
            style={styles.headerImage}
            resizeMode="cover"
          />
          <ThemedView style={styles.headerOverlay}>
            <ThemedText type="title" style={[styles.headerText, { color: colors.text }]}>
              Finance Dashboard
            </ThemedText>
          </ThemedView>
        </ThemedView>
      }
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Quick Overview Cards */}
        <View style={styles.cardRow}>
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <FontAwesome5 name="wallet" size={30} color={colors.accent} />
            <ThemedText type="subtitle" style={[styles.cardTitle, { color: colors.cardText }]}>
              Balance
            </ThemedText>
            <ThemedText type="default" style={[styles.cardAmount, { color: colors.accent }]}>
              $12,345.67
            </ThemedText>
          </View>
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <FontAwesome5 name="chart-line" size={30} color={colors.accent} />
            <ThemedText type="subtitle" style={[styles.cardTitle, { color: colors.cardText }]}>
              Expenses
            </ThemedText>
            <ThemedText type="default" style={[styles.cardAmount, { color: colors.accent }]}>
              $5,430.21
            </ThemedText>
          </View>
        </View>

        {/* Expense Chart Section */}
        <View style={styles.chartSection}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1145882183/photo/financial-and-technical-data-analysis-graph.jpg?s=612x612&w=0&k=20&c=Yx0-eRo1CcgJ90xXFjoQeOzghpE9QmJEMZjDvZXHHqU=',
            }}
            style={styles.chartImage}
          />
        </View>

        {/* Actionable Sections */}
        <View style={styles.cardSection}>
          <TouchableOpacity style={[styles.actionCard, { backgroundColor: colors.card }]} onPress={handleAddExpense}>
            <MaterialIcons name="add-box" size={30} color={colors.accent} />
            <ThemedText type="default" style={[styles.actionText, { color: colors.cardText }]}>
              Add Expense
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionCard, { backgroundColor: colors.card }]} onPress={handleViewReports}>
            <MaterialIcons name="bar-chart" size={30} color={colors.accent} />
            <ThemedText type="default" style={[styles.actionText, { color: colors.cardText }]}>
              View Reports
            </ThemedText>
          </TouchableOpacity>
        </View>

        {/* New Section for Bills and Goals */}
        <View style={styles.cardSection}>
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <FontAwesome5 name="money-bill-wave" size={30} color={colors.accent} />
            <ThemedText type="subtitle" style={[styles.cardTitle, { color: colors.cardText }]}>
              Upcoming Bills
            </ThemedText>
            <ThemedText type="default" style={[styles.cardAmount, { color: colors.accent }]}>
              $1,200.00
            </ThemedText>
          </View>
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <FontAwesome5 name="piggy-bank" size={30} color={colors.accent} />
            <ThemedText type="subtitle" style={[styles.cardTitle, { color: colors.cardText }]}>
              Savings Goals
            </ThemedText>
            <ThemedText type="default" style={[styles.cardAmount, { color: colors.accent }]}>
              $8,000.00
            </ThemedText>
          </View>
        </View>

        {/* Tips Section */}
        <View style={[styles.tipsSection, { backgroundColor: theme === 'dark' ? '#2C3E50' : '#E0F7FA' }]}>
          <ThemedText type="subtitle" style={[styles.tipsTitle, { color: theme === 'dark' ? '#fff' : '#000' }]}>
            Financial Tips
          </ThemedText>
          <ThemedText type="default" style={[styles.tipItem, { color: theme === 'dark' ? '#ddd' : '#333' }]}>
            - Set long-term goals for savings.
          </ThemedText>
          <ThemedText type="default" style={[styles.tipItem, { color: theme === 'dark' ? '#ddd' : '#333' }]}>
            - Keep track of daily expenses.
          </ThemedText>
          <ThemedText type="default" style={[styles.tipItem, { color: theme === 'dark' ? '#ddd' : '#333' }]}>
            - Diversify your investments.
          </ThemedText>
        </View>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    marginTop: 10,
  },
  cardAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  chartSection: {
    marginBottom: 25,
  },
  chartImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  actionCard: {
    width: '48%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  actionText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipsSection: {
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tipItem: {
    fontSize: 14,
    marginBottom: 5,
  },
});
