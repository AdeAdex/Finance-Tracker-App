//  /app/Verification.tsx

import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AppButton } from "@/components/AppButton";
import Divider from "@/components/Divider";


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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Verification",
      headerTitleAlign: "center", // This centers the title
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your Verification Code</Text>

      {/* OTP Input */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            ref={(ref) => (otpRefs.current[index] = ref)} // Assign ref to each TextInput
          />
        ))}
      </View>

      {/* Countdown Timer */}
      <Text style={styles.timer}>{formatTime(timer)}</Text>

      {/* Info text */}
      <Text style={styles.infoText}>
        We sent a verification code to your email solom*****@gmail.com. You can
        check your inbox.
      </Text>

      {/* Resend link */}
      <Text style={styles.link}>I didn’t receive the code? Send again</Text>

      {/* Verify Button */}
      <AppButton
        onPress={() => {}}
        title="Verify"
        buttonStyle={styles.buttonStyle}
      />
      <Divider/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 74,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
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
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
    fontSize: 24,
    width: 40,
    height: 40,
    backgroundColor: "#f9f9f9",
  },
  buttonStyle: {},
  timer: {
    fontSize: 16,
    color: "#3D51FF",
    fontWeight: "bold",
    marginBottom: 40,
  },
  infoText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 24,
  },
  link: {
    color: "#3D51FF",
    fontWeight: "600",
    marginBottom: 20,
  },
});
