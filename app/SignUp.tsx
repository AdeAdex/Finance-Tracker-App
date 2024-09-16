//  /app/SignUp.tsx

import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Checkbox from "expo-checkbox";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
// import { FontAwesome } from '@expo/vector-icons';

// Import the image
import googleIcon from "@/assets/images/flat-color-icons_google.png";
import { AppButton } from "@/components/AppButton";
import Divider from "@/components/Divider";


// Define the type for your navigation stack
type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Verification: undefined;
};

export default function SignUpScreen() {
  const [isChecked, setChecked] = useState(false);

  // Specify the type for navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Use layout effect to modify the header options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "SignUp",
      headerTitleAlign: "center", // This centers the title
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Sign Up</Text> */}

      <TextInput style={styles.input} placeholder="Name" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#3D51FF" : undefined}
        />
        <Text style={styles.checkboxText}>
          By signing up, you agree to the{" "}
          <Text style={styles.link}>Terms of Service</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>

      <AppButton
        onPress={() => navigation.navigate("Verification")}
        title="Sign Up"
        buttonStyle={styles.buttonStyle}
      />

      <Text style={styles.orText}>Or with</Text>

      <TouchableOpacity style={styles.googleButton}>
        {/* <FontAwesome name="google" size={24} color="#DB4437" /> */}
        <Image source={googleIcon} style={styles.icon} />
        <Text style={styles.googleButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          Login
        </Text>
      </Text>
      <Divider/>

    </View>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    fontSize: 16,
  },
  checkboxText: {
    marginLeft: 8,
    color: "#333",
  },
  link: {
    color: "#3D51FF",
  },
  orText: {
    textAlign: "center",
    marginBottom: 16,
    color: "#999",
  },
  buttonStyle: {
    marginBottom: 16,
    width: "auto",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center items horizontally
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
  },
  googleButtonText: {
    color: "#333",
    fontWeight: "bold",
    marginLeft: 8, // Adds spacing between the icon and the text
  },
  icon: {
    width: 24, // Adjust the width as needed
    height: 24, // Adjust the height as needed
  },
  footerText: {
    textAlign: "center",
    color: "#333",
  },
});
