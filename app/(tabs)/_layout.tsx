//  /app//tabs/_layout.tsx

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/context/ThemeProvider';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { MiddleButton } from '@/components/transaction/MiddleButton';
import AddTransactionModal from '@/components/transaction/AddTransactionModal';
import Divider from '@/components/Divider';

export default function MainLayout() {
  const { theme } = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);
  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const handleAddTransaction = () => {
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[theme].tabIconSelected,
          tabBarInactiveTintColor: Colors[theme].tabIconDefault,
          tabBarStyle: {
            backgroundColor: Colors[theme].tabBarBackground,
            height: 90,
            // borderTopLeftRadius: 20,
            // borderTopRightRadius: 20,
            position: 'absolute',
            bottom: 0,
            paddingBottom: 35,
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 10,
            elevation: 5,            
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "home" : "home-outline"} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            title: "Transactions",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "list" : "list-outline"} color={color} />
            ),
          }}
        />
         
        <Tabs.Screen
          name="budget"
          options={{
            title: "Budget",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "cash" : "cash-outline"} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "person" : "person-outline"} color={color} />
            ),
          }}
        />
       
      </Tabs>

      {/* Conditionally render the MiddleButton based on the active tab */}
      <MiddleButton 
        onPress={openModal} 
        style={styles.middleButton}
      />

      <AddTransactionModal
        visible={isModalVisible}
        onClose={closeModal}
        transactionName={transactionName}
        onTransactionNameChange={setTransactionName}
        transactionAmount={transactionAmount}
        onTransactionAmountChange={setTransactionAmount}
        onAddTransaction={handleAddTransaction}
      />
      <Divider dividerStyle={styles.divider}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  middleButton: {
    position: "absolute",
    bottom: 60,
    left: "50%",
    transform: [{ translateX: -24 }], // Center horizontally
    zIndex: 10,
  },
  divider: {
    position: 'absolute',
    alignSelf: 'center', 
    bottom: -10,
  },
});

