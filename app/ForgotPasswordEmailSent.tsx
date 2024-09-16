import React, { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AppButton } from "@/components/AppButton";

import sentImage from "@/assets/images/email-sent.png";
import Divider from "@/components/Divider";

type RootStackParamList = {
  ForgotPasswordEmailSent: undefined;
  Login: undefined;
};

type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ForgotPasswordEmailSent"
>;

const { width } = Dimensions.get("window");

export default function ForgotPasswordScreen() {
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  // Use layout effect to modify the header options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Forgot Password Email Sent",
      headerTitleAlign: "center", // This centers the title
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={sentImage} style={styles.image} />
      <Text style={styles.title}>Your email is on the way</Text>
      <Text style={styles.content}>
        Check your email sol......@gmail.com and follow the instructions to
        reset your password
      </Text>
      <AppButton
        onPress={() => navigation.navigate("Login")}
        title="Back to Login"
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
    color: "#333",
    marginBottom: 10,
    lineHeight: 29.05,
  },
  content: {
    fontSize: 16,
    fontWeight: "500", // Semi-bold weight
    textAlign: "center",
    color: "#292B2D",
    marginTop: 10,
    fontFamily: "Inter_500Medium", // Use Inter semi-bold
    lineHeight: 19.36,
  },
  buttonStyle: {
    marginTop: "auto",
    width: "100%",
  },
});
