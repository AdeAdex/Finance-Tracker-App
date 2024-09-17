// /app/ForgotPassword.tsx

import React, { useState, useLayoutEffect } from "react";
import { TextInput, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AppButton } from "@/components/AppButton";
import Divider from "@/components/Divider";
import { ThemedView } from '@/components/ThemedView'; // Import ThemedView
import { ThemedText } from '@/components/ThemedText'; // Import ThemedText
import { useTheme } from '@/context/ThemeProvider'; // Import your theme hook
import { Colors } from '@/constants/Colors';

type RootStackParamList = {
  ForgotPassword: undefined;
  ForgotPasswordEmailSent: undefined;
};

type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ForgotPassword"
>;

export default function ForgotPasswordScreen() {
  const navigation = useNavigation<ForgotPasswordNavigationProp>();
  const [email, setEmail] = useState("");

  const { theme } = useTheme(); // Get the current theme
  const colors = Colors[theme];

  // Use layout effect to modify the header options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Forgot Password",
      headerTitleAlign: "center", // This centers the title
      headerStyle: {
        backgroundColor: colors.navigationHeaderBackground, // Set the header background color
      },
      headerTintColor: colors.text, // Set the header text color
    });
  }, [navigation, colors]);

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemedText type="title" style={[styles.title, { color: colors.text}]}>
        Enter your email and we’ll send you a link to reset your password.
      </ThemedText>
      <TextInput
        style={[styles.input, { borderColor: colors.inputBorder, backgroundColor: colors.inputBackground }]}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <AppButton
        onPress={() => navigation.navigate("ForgotPasswordEmailSent")}
        title="Continue"
        buttonStyle={[styles.buttonStyle]}
      />
      <Divider/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 74,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 40,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    marginTop: 50,
  },
  buttonStyle: {
    marginBottom: 16,
    width: "auto",
  },
});
