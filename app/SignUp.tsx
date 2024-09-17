// /app/SignUp.tsx

import React, { useState, useLayoutEffect } from "react";
import { Image, TextInput, TouchableOpacity, StyleSheet, View } from "react-native";
import Checkbox from "expo-checkbox";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { AppButton } from "@/components/AppButton";
import Divider from "@/components/Divider";
import { useTheme } from '@/context/ThemeProvider'; // Import your theme hook
import { Colors } from '@/constants/Colors';

// Import the image
import googleIcon from "@/assets/images/flat-color-icons_google.png";

// Define the type for your navigation stack
type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Verification: undefined;
};

export default function SignUpScreen() {
  const [isChecked, setChecked] = useState(false);
  const { theme } = useTheme(); // Get the current theme
  const colors = Colors[theme];

  // Specify the type for navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Use layout effect to modify the header options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Sign Up",
      headerTitleAlign: "center", // This centers the title
      headerStyle: {
        backgroundColor: colors.navigationHeaderBackground, // Set the header background color
      },
      headerTintColor: colors.text, // Set the header text color
    });
  }, [navigation, colors]);

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput style={[styles.input, { backgroundColor: colors.inputBackground }]} placeholder="Name" />
      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground }]}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput style={[styles.input, { backgroundColor: colors.inputBackground }]} placeholder="Password" secureTextEntry />

      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? colors.tint : undefined}
        />
        <ThemedText style={[styles.checkboxText, { color: colors.text }]}>
          By signing up, you agree to the{" "}
          <ThemedText type="link" style={{ color: colors.tint }}>Terms of Service</ThemedText> and{" "}
          <ThemedText type="link" style={{ color: colors.tint }}>Privacy Policy</ThemedText>
        </ThemedText>
      </View>

      <AppButton
        onPress={() => navigation.navigate("Verification")}
        title="Sign Up"
        buttonStyle={[styles.buttonStyle]}
      />

      <ThemedText type="default" style={[styles.orText, { color: colors.text }]}>Or with</ThemedText>

      <TouchableOpacity style={[styles.googleButton, { borderColor: colors.text }]}>
        <Image source={googleIcon} style={styles.icon} />
        <ThemedText type="defaultSemiBold" style={[styles.googleButtonText, { color: colors.text }]}>Sign Up with Google</ThemedText>
      </TouchableOpacity>

      <ThemedText style={[styles.footerText, { color: colors.text }]}>
        Already have an account?{" "}
        <ThemedText type="link" onPress={() => navigation.navigate("Login")} style={{ color: colors.tint }}>
          Login
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
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    marginBottom: 16,
    fontSize: 14,
  },
  buttonStyle: {
    marginBottom: 16,
    width: "auto",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center items horizontally
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  googleButtonText: {
    fontWeight: "bold",
    marginLeft: 8, // Adds spacing between the icon and the text
  },
  icon: {
    width: 24, // Adjust the width as needed
    height: 24, // Adjust the height as needed
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
  },
});
