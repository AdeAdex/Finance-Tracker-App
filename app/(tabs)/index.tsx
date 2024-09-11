// /app/tabs/index.tsx
import { StyleSheet, Image, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView 
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <ThemedView style={styles.header}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYee9XpnNaWAD-BvjepzGYTAwJSRgd67-uA&s' }}  // Replace with your image URL
            style={styles.headerImage}
            resizeMode="cover"
          />
          <ThemedView style={styles.headerOverlay}>
            <ThemedText type="title" style={styles.headerText}>
              Personal Finance Tracker
            </ThemedText>
          </ThemedView>
        </ThemedView>
      }
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ThemedView style={styles.content}>
          <ThemedText type="subtitle">Welcome to Your Finance Hub</ThemedText>
          <ThemedText type="default">Track your expenses, set budgets, and monitor financial goals.</ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Features</ThemedText>
          <ThemedText type="default">- Expense Tracking</ThemedText>
          <ThemedText type="default">- Budget Planning</ThemedText>
          <ThemedText type="default">- Financial Goals</ThemedText>
          <ThemedText type="default">- Reports and Analytics</ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">How It Works</ThemedText>
          <ThemedText type="default">Our app provides a simple way to manage your finances with the following steps:</ThemedText>
          <ThemedText type="default">1. Add your expenses and incomes.</ThemedText>
          <ThemedText type="default">2. Set monthly or yearly budgets.</ThemedText>
          <ThemedText type="default">3. Review financial reports to see where your money is going.</ThemedText>
          <ThemedText type="default">4. Adjust your budgets and goals as needed.</ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Tips for Managing Finances</ThemedText>
          <ThemedText type="default">- Track all your expenses regularly.</ThemedText>
          <ThemedText type="default">- Set realistic budgets.</ThemedText>
          <ThemedText type="default">- Save a portion of your income.</ThemedText>
          <ThemedText type="default">- Review and adjust your goals periodically.</ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Contact Us</ThemedText>
          <ThemedText type="default">If you have any questions or need support, feel free to reach out to us.</ThemedText>
        </ThemedView>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 300,
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
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  headerText: {
    color: '#fff',
  },
  contentContainer: {
    paddingVertical: 20,
  },
  content: {
    padding: 20,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
