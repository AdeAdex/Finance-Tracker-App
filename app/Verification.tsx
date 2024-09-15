//  /app/Verification.tsx

import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Verification: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Verification"
>;

export const Verification = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [otp, setOtp] = useState("");

  // Use layout effect to modify the header options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Login",
      headerTitleAlign: "center", // This centers the title
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your Verification Code</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={otp}
        onChangeText={setOtp}
      />
      <Text style={styles.inbox}>
        We send verification code to your email solom*****@gmail.com. You can
        check your inbox.
      </Text>
      <Text style={styles.link}>I didn’t received the code? Send again</Text>

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 74,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  inbox: {
    marginBottom: 16,
    fontSize: 16,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  link: {
    color: "#3D51FF",
    fontWeight: "bold",
  },
  verifyButton: {
    backgroundColor: "#3D51FF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  verifyButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
