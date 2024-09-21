// /app/ForgotPasswordEmailSent.tsx

import React, { useLayoutEffect } from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { ThemedView } from '@/components/ThemedView'; // Import ThemedView
import { ThemedText } from '@/components/ThemedText'; // Import ThemedText
import { AppButton } from "@/components/AppButton";
import Divider from "@/components/Divider";
import sentImage from "@/assets/images/email-sent.png";
import { useTheme } from '@/context/ThemeProvider'; // Import your theme hook
import { Colors } from '@/constants/Colors';

type RootStackParamList = {
  ForgotPasswordEmailSent: undefined;
  Login: undefined;
  ResetPassword: undefined;
};

type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ForgotPasswordEmailSent"
>;

const { width } = Dimensions.get("window");

export default function ForgotPasswordEmailSentScreen() {
  const navigation = useNavigation<ForgotPasswordNavigationProp>();
  const { theme } = useTheme(); // Get the current theme
  const colors = Colors[theme];

  // Use layout effect to modify the header options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Forgot Password Email Sent",
      headerTitleAlign: "center", // This centers the title
      headerStyle: {
        backgroundColor: colors.navigationHeaderBackground, // Set the header background color
      },
      headerTintColor: colors.text, // Set the header text color
    });
  }, [navigation, colors]);

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <Image source={sentImage} style={styles.image} />
      <ThemedText type="title" style={[styles.title, { color: colors.text}]}>
        Your email is on the way
      </ThemedText>
      <ThemedText type="default" style={[styles.content, { color: colors.text }]}>
        Check your email sol......@gmail.com and follow the instructions to
        reset your password
      </ThemedText>
      {/* <AppButton
        onPress={() => navigation.navigate("Login")}
        title="Back to Login"
        buttonStyle={[styles.buttonStyle]}
      /> */}
      <AppButton
        onPress={() => navigation.navigate("ResetPassword")}
        title="Back to Login"
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
    // paddingBottom: 10,
    alignItems: "center", // Center content horizontally
  },
  image: {
    width: width * 0.8, // Set image width to 80% of screen width
    height: width * 0.5, // Set image height to 50% of screen width to maintain aspect ratio
    marginBottom: 50,
    resizeMode: "contain", // Ensure the image scales within the boundaries
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 29.05,
  },
  content: {
    fontSize: 16,
    fontWeight: "500", // Semi-bold weight
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Inter_500Medium", // Use Inter semi-bold
    lineHeight: 19.36,
  },
  buttonStyle: {
    marginTop: "auto",
    width: "100%",
  },
});
