// // // /app/tabs/index.tsx


// import React from 'react';
// import {
//   StyleSheet,
//   Image,
//   ScrollView,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
// import { useTheme } from '@/context/ThemeProvider';
// import { useNavigation } from '@react-navigation/native';

// // Define types for navigation
// type HomeScreenNavigationProp = {
//   navigate: (screen: string) => void;
// };

// export default function HomeScreen() {
//   const { theme } = useTheme();
//   const colors = theme === 'dark'
//     ? { background: '#1D3D47', text: '#fff', card: '#2C3E50', cardText: '#fff', accent: '#FF5722' }
//     : { background: '#F3F4F6', text: '#333', card: '#fff', cardText: '#333', accent: '#4CAF50' };

//     const navigation = useNavigation<HomeScreenNavigationProp>();

//     const handleNavigate = (screen: string) => {
//       navigation.navigate(screen);
//     };

//   return (
//        <ParallaxScrollView
//       headerBackgroundColor={{
//         dark: '#1D3D47',
//         light: '#F3F4F6'
//       }}
//       headerImage={
//         <ThemedView style={[styles.header, { backgroundColor: colors.background }]}>
//           <Image
//             source={{
//               uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHA51gtpJAldEsG2OLtxy3jRveaGdV1s4MQ&s',
//             }}
//             style={styles.headerImage}
//             resizeMode="cover"
//           />
//           <ThemedView style={styles.headerOverlay}>
//             <ThemedText type="title" style={[styles.headerText, { color: colors.text }]}>
//               Finance Dashboard
//             </ThemedText>
//           </ThemedView>
//         </ThemedView>
//       }
//     >
//       <ScrollView contentContainerStyle={styles.contentContainer}>
//         {/* Quick Overview Cards */}
//         <View style={styles.cardRow}>
//           <View style={[styles.card, { backgroundColor: colors.card }]}>
//             <FontAwesome5 name="wallet" size={30} color={colors.accent} />
//             <ThemedText type="subtitle" style={[styles.cardTitle, { color: colors.cardText }]}>
//               Balance
//             </ThemedText>
//             <ThemedText type="default" style={[styles.cardAmount, { color: colors.accent }]}>
//               $12,345.67
//             </ThemedText>
//           </View>
//           <View style={[styles.card, { backgroundColor: colors.card }]}>
//             <FontAwesome5 name="chart-line" size={30} color={colors.accent} />
//             <ThemedText type="subtitle" style={[styles.cardTitle, { color: colors.cardText }]}>
//               Expenses
//             </ThemedText>
//             <ThemedText type="default" style={[styles.cardAmount, { color: colors.accent }]}>
//               $5,430.21
//             </ThemedText>
//           </View>
//         </View>

//         {/* Expense Chart Section */}
//         <View style={styles.chartSection}>
//           <Image
//             source={{
//               uri: 'https://media.istockphoto.com/id/1145882183/photo/financial-and-technical-data-analysis-graph.jpg?s=612x612&w=0&k=20&c=Yx0-eRo1CcgJ90xXFjoQeOzghpE9QmJEMZjDvZXHHqU=',
//             }}
//             style={styles.chartImage}
//           />
//         </View>

//         {/* Actionable Sections */}
//         <View style={styles.cardSection}>
//           <TouchableOpacity
//             style={[styles.actionCard, { backgroundColor: colors.card }]}
//             onPress={() => handleNavigate('AddExpenseScreen')}
//           >
//             <MaterialIcons name="add-box" size={30} color={colors.accent} />
//             <ThemedText type="default" style={[styles.actionText, { color: colors.cardText }]}>
//               Add Expense
//             </ThemedText>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.actionCard, { backgroundColor: colors.card }]}
//             onPress={() => handleNavigate('reports')}
//           >
//             <MaterialIcons name="bar-chart" size={30} color={colors.accent} />
//             <ThemedText type="default" style={[styles.actionText, { color: colors.cardText }]}>
//               View Reports
//             </ThemedText>
//           </TouchableOpacity>
//         </View>

//         {/* New Section for Bills and Goals */}
//         <View style={styles.cardSection}>
//           <View style={[styles.card, { backgroundColor: colors.card }]}>
//             <FontAwesome5 name="money-bill-wave" size={30} color={colors.accent} />
//             <ThemedText type="subtitle" style={[styles.cardTitle, { color: colors.cardText }]}>
//               Upcoming Bills
//             </ThemedText>
//             <ThemedText type="default" style={[styles.cardAmount, { color: colors.accent }]}>
//               $1,200.00
//             </ThemedText>
//           </View>
//           <View style={[styles.card, { backgroundColor: colors.card }]}>
//             <FontAwesome5 name="piggy-bank" size={30} color={colors.accent} />
//             <ThemedText type="subtitle" style={[styles.cardTitle, { color: colors.cardText }]}>
//               Savings Goals
//             </ThemedText>
//             <ThemedText type="default" style={[styles.cardAmount, { color: colors.accent }]}>
//               $8,000.00
//             </ThemedText>
//           </View>
//         </View>

//         {/* Tips Section */}
//         <View style={[styles.tipsSection, { backgroundColor: theme === 'dark' ? '#2C3E50' : '#E0F7FA' }]}>
//           <ThemedText type="subtitle" style={[styles.tipsTitle, { color: theme === 'dark' ? '#fff' : '#000' }]}>
//             Financial Tips
//           </ThemedText>
//           <ThemedText type="default" style={[styles.tipItem, { color: theme === 'dark' ? '#ddd' : '#333' }]}>
//             - Set long-term goals for savings.
//           </ThemedText>
//           <ThemedText type="default" style={[styles.tipItem, { color: theme === 'dark' ? '#ddd' : '#333' }]}>
//             - Keep track of daily expenses.
//           </ThemedText>
//           <ThemedText type="default" style={[styles.tipItem, { color: theme === 'dark' ? '#ddd' : '#333' }]}>
//             - Diversify your investments.
//           </ThemedText>
//         </View>
//       </ScrollView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     height: 250,
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow: 'hidden',
//   },
//   headerImage: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   headerOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   headerText: {
//     fontSize: 26,
//     fontWeight: 'bold',
//   },
//   contentContainer: {
//     paddingVertical: 20,
//     paddingHorizontal: 15,
//   },
//   cardRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   card: {
//     flex: 1,
//     marginHorizontal: 5,
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   cardAmount: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   chartSection: {
//     marginBottom: 20,
//   },
//   chartImage: {
//     width: '100%',
//     height: 200,
//   },
//   cardSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   actionCard: {
//     flex: 1,
//     marginHorizontal: 5,
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   actionText: {
//     fontSize: 16,
//     marginTop: 10,
//   },
//   tipsSection: {
//     padding: 15,
//     borderRadius: 10,
//   },
//   tipsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   tipItem: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
// });








import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppButton } from '@/components/AppButton';

const { width } = Dimensions.get('window');

type NavigationProp = {
  navigate: (screen: string) => void;
};

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation<NavigationProp>();

  const onboardingSteps = [
    {
      title: 'Gain total control of your money',
      description: 'Become your own money manager and make every cent count.',
      image: require('@/assets/images/onbording1.png'), // Replace with actual image path
    },
    {
      title: 'Know where your money goes',
      description: 'Track your transaction easily, with categories and financial reports.',
      image: require('@/assets/images/onbording2.png'), // Replace with actual image path
    },
    {
      title: 'Planning ahead',
      description: 'Setup your budget for each category so you are in control.',
      image: require('@/assets/images/onbording3.png'), // Replace with actual image path
    },
  ];

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentStep(slideIndex);
  };

  const handleNextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      scrollViewRef.current?.scrollTo({ x: (currentStep + 1) * width, animated: true });
    } else {
      // Navigate to the signup page after the last onboarding step
      navigation.navigate('SignUp');
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollView}
      >
        {onboardingSteps.map((step, index) => (
          <View key={index} style={styles.slide}>
            <Image source={step.image} style={styles.image} />
            <Text style={styles.title}>{step.title}</Text>
            <Text style={styles.description}>{step.description}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          {onboardingSteps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: currentStep === index ? '#3D51FF' : '#ccc' },
              ]}
            />
          ))}
        </View>
        
        <AppButton onPress={handleNextStep} title={`${currentStep === onboardingSteps.length - 1 ? 'Sign Up' : 'Next'}`}  />
        <AppButton onPress={handleLogin} title='Login' buttonStyle={styles.loginButton} buttonTextStyle={styles.loginText}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,  
    height: width * 0.8, // Make the height equal to width to maintain aspect ratio
    marginBottom: 30,
    borderStyle: 'dotted',
    borderColor: 'red',
    resizeMode: 'contain', // Ensure the image scales within the boundaries
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
    fontFamily: 'Inter_700Bold', // Use Inter bold here
    lineHeight: 39,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
    fontFamily: 'Inter_400Regular', // Use Inter regular here
    lineHeight: 19.36,
  },
  footer: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#3D51FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: '#EEE5FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  loginText: {
    color: '#3D51FF',
    fontSize: 16,
    fontWeight: "normal",
  },
});
