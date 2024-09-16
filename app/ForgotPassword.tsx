import React, { useState, useLayoutEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AppButton } from "@/components/AppButton";
import Divider from "@/components/Divider";


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

  // Use layout effect to modify the header options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "ForgotPassword",
      headerTitleAlign: "center", // This centers the title
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter your email and we’ll send you a link to reset your password.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <AppButton
        onPress={() => navigation.navigate("ForgotPasswordEmailSent")}
        title="Continue"
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
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  buttonStyle: {
    marginBottom: 16,
    width: "auto",
  },
});
