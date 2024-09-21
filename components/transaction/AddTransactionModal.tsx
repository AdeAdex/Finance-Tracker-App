// /components/transaction/AddTransactionModal.tsx



import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

interface AddTransactionModalProps {
  visible: boolean;
  onClose: () => void;
  transactionName: string;
  onTransactionNameChange: (name: string) => void;
  transactionAmount: string;
  onTransactionAmountChange: (amount: string) => void;
  onAddTransaction: () => void;
}

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  visible,
  onClose,
  transactionName,
  onTransactionNameChange,
  transactionAmount,
  onTransactionAmountChange,
  onAddTransaction,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Add Transaction</Text>
                <TouchableOpacity onPress={onClose}>
                  <Ionicons name="close" size={24} color="black" style={styles.closeIcon} /> 
                </TouchableOpacity>
              </View>
              <TextInput
                value={transactionName}
                onChangeText={onTransactionNameChange}
                placeholder="Transaction Name"
                style={styles.input}
              />
              <TextInput
                value={transactionAmount}
                onChangeText={onTransactionAmountChange}
                placeholder="Transaction Amount"
                keyboardType="numeric"
                style={styles.input}
              />
              <TouchableOpacity onPress={onAddTransaction} style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    padding: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeIcon: {
    alignSelf: 'center', // Center icon vertically in the header
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  applyButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTransactionModal;
