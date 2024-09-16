//  /app/Login.tsx

import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AppButton } from '@/components/AppButton';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   // Use layout effect to modify the header options
   useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Login',
      headerTitleAlign: 'center',  // This centers the title
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <AppButton onPress={() => {}} title="Login" buttonStyle={styles.buttonStyle}/>

      <Text style={styles.forgotPasswordText} onPress={() => navigation.navigate('ForgotPassword')}>
        Forgot Password?
      </Text>

      <Text style={styles.footerText}>
        Don't have an account yet?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 74,
    // justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  buttonStyle: {
    marginBottom: 16,
    width: 'auto',
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#3D51FF',
  },
  footerText: {
    textAlign: 'center',
    color: '#333',
  },
  link: {
    color: '#3D51FF',
    fontWeight: 'bold',
  },
});
