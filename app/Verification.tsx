// /app/VerificationScreen.tsx

import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AppButton } from "@/components/AppButton";
import Divider from "@/components/Divider";
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/context/ThemeProvider'; // Import your theme hook
import { Colors } from '@/constants/Colors';

type RootStackParamList = {
  Verification: undefined;
};

type VerificationNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Verification"
>;

export default function VerificationScreen() {
  const navigation = useNavigation<VerificationNavigationProp>();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(300); // 5-minute countdown (300 seconds)

  // Refs to each input field
  const otpRefs = useRef<(TextInput | null)[]>([]);

  // Handle OTP input and focus on the next input
  const handleOtpChange = (value: string, index: number) => {
    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    // Automatically focus on the next input field
    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  // Countdown Timer
  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  // Convert timer into minutes:seconds format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const { theme } = useTheme(); // Get the current theme
  const colors = Colors[theme];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Verification",
      headerTitleAlign: "center", // This centers the title
      headerStyle: {
        backgroundColor: colors.navigationHeaderBackground, // Set the header background color
      },
      headerTintColor: colors.text, // Set the header text color
    });
  }, [navigation, colors]);

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemedText type="title" style={[styles.title, { color: colors.text }]}>Enter your Verification Code</ThemedText>

      {/* OTP Input */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={[styles.otpInput, { color: colors.otpInputText, borderColor: colors.otpInputBorder }]}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            ref={(ref) => (otpRefs.current[index] = ref)} // Assign ref to each TextInput
          />
        ))}
      </View>

      {/* Countdown Timer */}
      <ThemedText type="defaultSemiBold" style={[styles.timer, { color: colors.timerText }]}>{formatTime(timer)}</ThemedText>

      {/* Info text */}
      <ThemedText type="description" style={[styles.infoText, { color: colors.infoText }]}>
        We sent a verification code to your email solom*****@gmail.com. You can
        check your inbox.
      </ThemedText>

      {/* Resend link */}
      <ThemedText type="link" style={[styles.link, { color: colors.linkTextColor }]}>I didn’t receive the code? Send again</ThemedText>

      {/* Verify Button */}
      <AppButton
        onPress={() => {}}
        title="Verify"
        buttonStyle={[styles.buttonStyle]}
      />
      <Divider />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 74,
    // paddingBottom: 10,
    alignItems: "center",
  },
  title: {
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
    textAlign: "center",
    fontSize: 24,
    width: 40,
    height: 40,
  },
  buttonStyle: {
    marginTop: 36,
  },
  timer: {
    marginBottom: 40,
  },
  infoText: {
    marginBottom: 24,
  },
  link: {
    marginBottom: 20,
  },
});
