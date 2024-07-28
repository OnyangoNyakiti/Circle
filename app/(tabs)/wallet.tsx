// Wallet.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const transactions = [
    { id: '1', type: 'Credit', amount: 100, date: '2023-01-01' },
    { id: '2', type: 'Debit', amount: 50, date: '2023-01-05' },
    { id: '3', type: 'Credit', amount: 200, date: '2023-01-10' },
];

const Wallet = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Wallet</Text>
                <Ionicons name="wallet" size={24} color="black" />
            </View>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceTitle}>Current Balance</Text>
                <Text style={styles.balance}>$250.00</Text>
            </View>
            <View style={styles.transactionsContainer}>
                <Text style={styles.transactionsTitle}>Transactions</Text>
                <FlatList
                    data={transactions}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.transactionItem}>
                            <Ionicons name={item.type === 'Credit' ? 'arrow-up-circle' : 'arrow-down-circle'} size={24} color={item.type === 'Credit' ? 'green' : 'red'} />
                            <View style={styles.transactionDetails}>
                                <Text style={styles.transactionType}>{item.type}</Text>
                                <Text style={styles.transactionDate}>{item.date}</Text>
                            </View>
                            <Text style={styles.transactionAmount}>${item.amount}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    balanceContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    balanceTitle: {
        fontSize: 18,
        color: 'gray',
    },
    balance: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    transactionsContainer: {
        flex: 1,
    },
    transactionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    transactionDetails: {
        flex: 1,
        marginLeft: 16,
    },
    transactionType: {
        fontSize: 16,
    },
    transactionDate: {
        fontSize: 14,
        color: 'gray',
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Wallet;
