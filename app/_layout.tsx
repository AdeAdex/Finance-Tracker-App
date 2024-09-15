// /app/_layout.tsx

import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Toast from 'react-native-toast-message';

import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemeProvider } from '@/context/ThemeProvider'; // Correct import
import { TailwindProvider } from 'tailwindcss-react-native';
import LoadingScreen from '@/components/LoadingScreen';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   // return null;
  //   return <LoadingScreen/>
  // }

  return (
    <TailwindProvider>
    <ThemeProvider>
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack> */}
      <Stack
        screenOptions={{
          headerShown: false,
          ...(colorScheme === 'dark' ? DarkTheme : DefaultTheme),
        }}
      >
        {/* Main Routes */}
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />

        {/* Ensure other nested routes are correctly referenced */}
        <Stack.Screen name="screens/ExploreScreen" />
        <Stack.Screen name="screens/AddExpenseScreen" />
        <Stack.Screen name="screens/ReportsScreen" />
      </Stack>
      <Toast />
    </ThemeProvider>
    </TailwindProvider>
  );
}

