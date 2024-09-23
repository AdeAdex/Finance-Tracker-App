// /app/Login.tsx

import React, { useState, useLayoutEffect } from "react";
import { TextInput, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AppButton } from "@/components/AppButton";
import Divider from "@/components/Divider";
import { ThemedView } from "@/components/ThemedView"; // Import ThemedView
import { ThemedText } from "@/components/ThemedText"; // Import ThemedText
import { useTheme } from "@/context/ThemeProvider"; // Import your theme hook
import { Colors } from "@/constants/Colors";

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  profile: undefined;
  "(tabs)": { screen: string }; 
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { theme } = useTheme(); // Get the current theme
  const colors = Colors[theme];

  // Use layout effect to modify the header options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Login",
      headerTitleAlign: "center", // This centers the title
      headerStyle: {
        backgroundColor: colors.navigationHeaderBackground, // Set the header background color
      },
      headerTintColor: colors.text, // Set the header text color
    });
  }, [navigation, colors]);

  return (
    <ThemedView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <TextInput
        style={[
          styles.input,
          {
            borderColor: colors.inputBorder,
            backgroundColor: colors.inputBackground,
          },
        ]}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[
          styles.input,
          {
            borderColor: colors.inputBorder,
            backgroundColor: colors.inputBackground,
          },
        ]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <AppButton
        // onPress={() => navigation.navigate("profile")}
        onPress={() => navigation.navigate("(tabs)", { screen: "index" })} 
        title="Login"
        buttonStyle={[styles.buttonStyle]}
      />

      <ThemedText
        style={[
          styles.forgotPasswordText,
          { color: colors.forgotPasswordText },
        ]}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        Forgot Password?
      </ThemedText>

      <ThemedText style={[styles.footerText, { color: colors.footerText }]}>
        Don't have an account yet?{" "}
        <ThemedText
          style={[styles.link, { color: colors.linkTextColor }]}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </ThemedText>
      </ThemedText>
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
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  buttonStyle: {
    marginBottom: 16,
    width: "auto",
  },
  forgotPasswordText: {
    textAlign: "center",
    marginBottom: 16,
  },
  footerText: {
    textAlign: "center",
  },
  link: {
    fontWeight: "bold",
  },
});
