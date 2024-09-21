
// /app/tabs/index.tsx


import React, { useRef, useState } from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppButton } from '@/components/AppButton';
import Divider from '@/components/Divider';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/context/ThemeProvider'; // Import your theme hook
import { Colors } from '@/constants/Colors';
import { onboardingSteps } from '@/data/OnboardingData';

const { width } = Dimensions.get('window');

type NavigationProp = {
  navigate: (screen: string) => void;
};

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation<NavigationProp>();
  const { theme } = useTheme(); // Get the current theme
  const colors = Colors[theme];

 

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentStep(slideIndex);
  };

  const handleNextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      scrollViewRef.current?.scrollTo({ x: (currentStep + 1) * width, animated: true });
    } else {
      navigation.navigate('SignUp');
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContainer}
      >
        {onboardingSteps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <Image source={step.image} style={styles.image} />
            <ThemedText type="title" style={{ color: colors.text, textAlign: 'center', marginBottom: 10 }}>
              {step.title}
            </ThemedText>
            <ThemedText type="description" style={{ color: colors.text, textAlign: 'center', marginBottom: 40 }}>
              {step.description}
            </ThemedText>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <View style={styles.dotContainer}>
          {onboardingSteps.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, { backgroundColor: currentStep === index ? colors.tint : colors.icon }]}
            />
          ))}
        </View>

        <AppButton onPress={handleNextStep} title={currentStep === onboardingSteps.length - 1 ? 'Sign Up' : 'Next'}   />
        <AppButton onPress={handleLogin} title="Login" buttonStyle={styles.loginButton} buttonTextStyle={{ color: 'blue' }} />
      </View>
      <Divider />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingBottom: 74,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepContainer: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  loginButton: {
    marginTop: 10,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
    backgroundColor: "#EEE5FF"
  },
});
